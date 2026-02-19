"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Building = void 0;
const Elevator_1 = require("./Elevator");
const ElevatorController_1 = require("../controller/ElevatorController");
class Building {
    constructor(elevatorCount) {
        const elevators = Array.from({ length: elevatorCount }, (_, i) => new Elevator_1.Elevator(i + 1));
        this.controller = new ElevatorController_1.ElevatorController(elevators);
    }
}
exports.Building = Building;
//# sourceMappingURL=Building.js.map