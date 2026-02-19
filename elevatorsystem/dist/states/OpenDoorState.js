"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenDoorState = void 0;
const CloseDoorState_1 = require("./CloseDoorState");
class OpenDoorState {
    handle(elevator) {
        console.log(`🟢 Elevator ${elevator.id} doors OPEN at floor ${elevator.currentFloor}`);
        elevator.processPassengers();
        setTimeout(() => {
            elevator.state = new CloseDoorState_1.CloseDoorState();
        }, 2000);
    }
}
exports.OpenDoorState = OpenDoorState;
//# sourceMappingURL=OpenDoorState.js.map