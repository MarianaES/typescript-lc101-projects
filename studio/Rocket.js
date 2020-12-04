"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    // sumMass (items: Payload[]): number {
    //   let sum: number = 0;
    //   for (let i=0; i < items.length; i++) {
    //       sum += items[i].massKg;
    //   }
    //   return sum;
    // }
    // currentMassKg (): number {
    //     return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    // }
    Rocket.prototype.sumMass = function (items) {
        var total = 0;
        items.forEach(function (item) { return total += item.massKg; });
        return total;
    };
    Rocket.prototype.currentMassKg = function () {
        var astronautsMass = this.sumMass(this.astronauts);
        var cargoMass = this.sumMass(this.cargoItems);
        var totalMass = astronautsMass + cargoMass;
        return totalMass;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
