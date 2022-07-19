export interface IModel {
  toJSON(): any;
}

export interface ICheck {
  id: number;
  belongedId: number;
  wtId: number;
  diuId?: number;
  status: boolean;
}

export class Check implements IModel, ICheck {
  public id: number;
  public belongedId: number;
  public wtId: number;
  public diuId?: number;
  public status: boolean;

  constructor({ id, belongedId, wtId, diuId, status }: ICheck) {
    this.id = id;
    this.belongedId = belongedId;
    this.wtId = wtId;
    this.diuId = diuId;
    this.status = status;
  }

  toJSON() {
    return {
      ...this,
    };
  }
}
