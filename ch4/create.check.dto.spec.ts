import { CreateCheckDto } from './create.check.dto';

describe('CreateCheckDto', () => {
  it('with all property', () => {
    const dto = CreateCheckDto.from({ belongedId: 1, wtId: 1, diuId: 3 });
    expect(dto).toEqual({
      belongedId: 1,
      wtId: 1,
      diuId: 3,
    });
  });
});
