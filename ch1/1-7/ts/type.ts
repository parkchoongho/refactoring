export type Invoice = {
  customer: string;
  performances: Performance[];
};

export type Performance = {
  playID: string;
  audience: number;
  play?: Play;
  amount?: number;
  volumeCredits?: number;
};

export type Plays = {
  hamlet: Play;
  'as-like': Play;
  othello: Play;
};

export type Play = {
  name: string;
  type: string;
};

export type StatementData = {
  customer: string;
  performances: Performance[];
  totalAmount?: number;
  totalVolumeCredits?: number;
};
