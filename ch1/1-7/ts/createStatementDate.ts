import { Invoice, Performance, Play, Plays, StatementData } from './type';

export default function createStatementData(invoice: Invoice, plays: Plays): StatementData {
  const statementData: StatementData = {
    customer: invoice.customer,
    performances: invoice.performances.map(enrichPerformance),
  };

  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);

  return statementData;

  function enrichPerformance(aPerformance: Performance): Performance {
    const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
    const result = { ...aPerformance };
    result.play = calculator.play;
    result.amount = calculator.amount();
    result.volumeCredits = calculator.volumeCreditsFor();

    return result;
  }

  function playFor(aPerformance: Performance): Play {
    return plays[aPerformance.playID];
  }

  function totalVolumeCredits(data: StatementData): number {
    return data.performances.reduce((total, p) => total + p.volumeCredits!, 0);
  }

  function totalAmount(data: StatementData): number {
    return data.performances.reduce((total, p) => total + p.amount!, 0);
  }
}

abstract class PerformanceCalculator {
  constructor(aPerformace: Performance, aPlay: Play) {
    this.performance = aPerformace;
    this.play = aPlay;
  }

  abstract amount(): number;
  abstract volumeCreditsFor(): number;
  readonly performance: Performance;
  readonly play: Play;
}

function createPerformanceCalculator(aPerformace: Performance, aPlay: Play) {
  switch (aPlay.type) {
    case 'tragedy':
      return new TragedyCalculator(aPerformace, aPlay);
    case 'comedy':
      return new ComedyCalculator(aPerformace, aPlay);
    default:
      throw new Error(`알 수 없는 장르: ${aPlay.type}`);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  public amount(): number {
    let result = 40000;

    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }

    return result;
  }

  public volumeCreditsFor(): number {
    return Math.max(this.performance.audience - 30, 0);
  }

  readonly performance: Performance;
  readonly play: Play;
}

class ComedyCalculator extends PerformanceCalculator {
  public amount(): number {
    let result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result;
  }

  public volumeCreditsFor(): number {
    return Math.max(this.performance.audience - 30, 0) + Math.floor(this.performance.audience / 5);
  }

  readonly performance: Performance;
  readonly play: Play;
}
