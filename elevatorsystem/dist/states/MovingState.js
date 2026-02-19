"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovingState = void 0;
const OpenDoorState_1 = require("./OpenDoorState");
class MovingState {
    handle(elevator) {
        elevator.moveOneFloor();
        if (elevator.hasArrived()) {
            elevator.state = new OpenDoorState_1.OpenDoorState();
        }
    }
}
exports.MovingState = MovingState;
//# sourceMappingURL=MovingState.js.map