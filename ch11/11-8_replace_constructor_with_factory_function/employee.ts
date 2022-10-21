class Employee {
  private _name: string;
  private _typeCode: string;

  constructor(name: string, typeCode: string) {
    this._name = name;
    this._typeCode = typeCode;
  }

  static get legalTypeCodes() {
    return {
      C: 'Candidate',
      E: 'Engineer',
      M: 'Manager',
      S: 'Salesperson',
    };
  }

  get name() {
    return this._name;
  }
  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }
}

const candidate = createEmployee('candidate');
const leadEnginner = createEnginner('leadEngineer');

function createEmployee(name: string) {
  return new Employee(name, 'C');
}
function createEnginner(name: string) {
  return new Employee(name, 'E');
}
