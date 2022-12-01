"use strict";
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.ibrand = brand;
        this.imodel = model;
        this.iyear = year;
    }
    Car.prototype.calcualetData = function () {
        return this.imodel;
    };
    return Car;
}());
exports.Car = Car;
