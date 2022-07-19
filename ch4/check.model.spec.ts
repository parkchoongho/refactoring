import { Check } from './check.model';

describe('Check', () => {
  it('constructor', () => {
    const model = new Check({
      id: 1,
      belongedId: 1,
      wtId: 1,
      diuId: 1,
      status: true,
    });

    expect(model).toEqual({
      id: 1,
      belongedId: 1,
      wtId: 1,
      diuId: 1,
      status: true,
    });
  });

  it('toJSON', () => {
    const model = new Check({
      id: 1,
      belongedId: 1,
      wtId: 1,
      diuId: 1,
      status: true,
    });

    expect(model.toJSON()).toEqual({
      id: 1,
      belongedId: 1,
      wtId: 1,
      diuId: 1,
      status: true,
    });
  });
});
