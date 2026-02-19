"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElevatorController = void 0;
const Direction_1 = require("../enums/Direction");
class ElevatorController {
    constructor(elevators) {
        this.elevators = elevators;
        this.pendingRequests = [];
    }
    requestElevator(request) {
        let bestElevator = null;
        let bestScore = Infinity;
        for (const elevator of this.elevators) {
            if (!elevator.canAccept(request))
                continue;
            const score = this.calculateScore(elevator, request);
            if (score < bestScore) {
                bestScore = score;
                bestElevator = elevator;
            }
        }
        if (bestElevator) {
            bestElevator.addRequest(request);
        }
        else {
            console.log("⏳ All elevators busy, request queued");
            this.pendingRequests.push(request);
        }
    }
    calculateScore(elevator, request) {
        const distance = Math.abs(elevator.currentFloor - request.sourceFloor);
        if (elevator.direction === Direction_1.Direction.IDLE)
            return distance;
        if (elevator.direction === request.getDirection())
            return distance - 2;
        return distance + 5;
    }
    stepAll() {
        for (const elevator of this.elevators) {
            elevator.step();
        }
    }
}
exports.ElevatorController = ElevatorController;
//# sourceMappingURL=ElevatorController.js.map