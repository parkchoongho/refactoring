import createStatementData from './createStatementDate';
import { Invoice, Plays, StatementData } from './type';

function statement(invoice: Invoice, plays: Plays): string {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data: StatementData): string {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    result += `${perf.play?.name}: ${usd(perf.amount!)} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(data.totalAmount!)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
  return result;

  function usd(aNumber: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(aNumber / 100);
  }
}

const invoice: Invoice = {
  customer: 'BigCo',
  performances: [
    {
      playID: 'hamlet',
      audience: 55,
    },
    {
      playID: 'as-like',
      audience: 35,
    },
    {
      playID: 'othello',
      audience: 40,
    },
  ],
};

const plays: Plays = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  'as-like': { name: 'As You Like It', type: 'comedy' },
  othello: { name: 'Othello', type: 'tragedy' },
};

console.log(statement(invoice, plays));
