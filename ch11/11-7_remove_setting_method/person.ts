class Person {
  private _name: string;
  private _id: number;
  constructor(id: number) {
    this._id = id;
  }

  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
  get id() {
    return this._id;
  }
}
const martin = new Person(1234);
martin.name = '마틴';
