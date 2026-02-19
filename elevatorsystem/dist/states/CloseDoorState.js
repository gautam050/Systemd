"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseDoorState = void 0;
const MovingState_1 = require("./MovingState");
class CloseDoorState {
    handle(elevator) {
        console.log(`🔴 Elevator ${elevator.id} doors CLOSED`);
        if (elevator.hasPendingRequests()) {
            elevator.state = new MovingState_1.MovingState();
        }
        else {
            elevator.setIdle();
        }
    }
}
exports.CloseDoorState = CloseDoorState;
//# sourceMappingURL=CloseDoorState.js.map