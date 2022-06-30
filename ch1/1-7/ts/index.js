"use strict";
exports.__esModule = true;
var createStatementDate_1 = require("./createStatementDate");
function statement(invoice, plays) {
    return renderPlainText(createStatementDate_1["default"](invoice, plays));
}
function renderPlainText(data) {
    var _a;
    var result = "\uCCAD\uAD6C \uB0B4\uC5ED (\uACE0\uAC1D\uBA85: " + data.customer + ")\n";
    for (var _i = 0, _b = data.performances; _i < _b.length; _i++) {
        var perf = _b[_i];
        result += ((_a = perf.play) === null || _a === void 0 ? void 0 : _a.name) + ": " + usd(perf.amount) + " (" + perf.audience + "\uC11D)\n";
    }
    result += "\uCD1D\uC561: " + usd(data.totalAmount) + "\n";
    result += "\uC801\uB9BD \uD3EC\uC778\uD2B8: " + data.totalVolumeCredits + "\uC810\n";
    return result;
    function usd(aNumber) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(aNumber / 100);
    }
}
var invoice = {
    customer: 'BigCo',
    performances: [
        {
            playID: 'hamlet',
            audience: 55
        },
        {
            playID: 'as-like',
            audience: 35
        },
        {
            playID: 'othello',
            audience: 40
        },
    ]
};
var plays = {
    hamlet: { name: 'Hamlet', type: 'tragedy' },
    'as-like': { name: 'As You Like It', type: 'comedy' },
    othello: { name: 'Othello', type: 'tragedy' }
};
console.log(statement(invoice, plays));
