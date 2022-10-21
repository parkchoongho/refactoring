var Employee = /** @class */ (function () {
    function Employee(name, typeCode) {
        this._name = name;
        this._typeCode = typeCode;
    }
    Object.defineProperty(Employee, "legalTypeCodes", {
        get: function () {
            return {
                E: 'Engineer',
                M: 'Manager',
                S: 'Salesperson'
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "type", {
        get: function () {
            return Employee.legalTypeCodes[this._typeCode];
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var candidate = createEmployee('candidate');
var leadEnginner = createEnginner('leadEngineer');
function createEmployee(name) {
    return new Employee(name, 'C');
}
function createEnginner(name) {
    return new Employee(name, 'E');
}
console.log(candidate.type);
console.log(leadEnginner.type);
