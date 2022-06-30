"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function createStatementData(invoice, plays) {
    var statementData = {
        customer: invoice.customer,
        performances: invoice.performances.map(enrichPerformance)
    };
    statementData.totalAmount = totalAmount(statementData);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);
    return statementData;
    function enrichPerformance(aPerformance) {
        var calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
        var result = __assign({}, aPerformance);
        result.play = calculator.play;
        result.amount = calculator.amount();
        result.volumeCredits = calculator.volumeCreditsFor();
        return result;
    }
    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }
    function totalVolumeCredits(data) {
        return data.performances.reduce(function (total, p) { return total + p.volumeCredits; }, 0);
    }
    function totalAmount(data) {
        return data.performances.reduce(function (total, p) { return total + p.amount; }, 0);
    }
}
exports["default"] = createStatementData;
function createPerformanceCalculator(aPerformace, aPlay) {
    switch (aPlay.type) {
        case 'tragedy':
            return new TragedyCalculator(aPerformace, aPlay);
        case 'comedy':
            return new ComedyCalculator(aPerformace, aPlay);
        default:
            throw new Error("\uC54C \uC218 \uC5C6\uB294 \uC7A5\uB974: " + aPlay.type);
    }
}
var TragedyCalculator = /** @class */ (function () {
    function TragedyCalculator(aPerformace, aPlay) {
        this.performance = aPerformace;
        this.play = aPlay;
    }
    TragedyCalculator.prototype.amount = function () {
        var result = 40000;
        if (this.performance.audience > 30) {
            result += 1000 * (this.performance.audience - 30);
        }
        return result;
    };
    TragedyCalculator.prototype.volumeCreditsFor = function () {
        return Math.max(this.performance.audience - 30, 0);
    };
    return TragedyCalculator;
}());
var ComedyCalculator = /** @class */ (function () {
    function ComedyCalculator(aPerformace, aPlay) {
        this.performance = aPerformace;
        this.play = aPlay;
    }
    ComedyCalculator.prototype.amount = function () {
        var result = 30000;
        if (this.performance.audience > 20) {
            result += 10000 + 500 * (this.performance.audience - 20);
        }
        result += 300 * this.performance.audience;
        return result;
    };
    ComedyCalculator.prototype.volumeCreditsFor = function () {
        return Math.max(this.performance.audience - 30, 0) + Math.floor(this.performance.audience / 5);
    };
    return ComedyCalculator;
}());
