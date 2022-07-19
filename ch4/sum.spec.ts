import { sum } from './sum';

describe('test sum function', () => {
  it('2 + 2', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
