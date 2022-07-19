export class CreateCheckDto {
  static from(option: { belongedId: number; wtId: number; diuId?: number }) {
    const it = new CreateCheckDto();

    it.belongedId = option.belongedId;
    it.wtId = option.wtId;
    it.diuId = option.diuId;

    return it;
  }

  belongedId: number;
  wtId: number;
  diuId?: number;
}
