import { Elevator } from "../models/Elevator";
import { Request } from "../models/Request";
import { Direction } from "../enums/Direction";

export class ElevatorController {
  pendingRequests: Request[] = [];

  constructor(private elevators: Elevator[]) {}

  requestElevator(request: Request) {
    let bestElevator: Elevator | null = null;
    let bestScore = Infinity;

    for (const elevator of this.elevators) {
      if (!elevator.canAccept(request)) continue;

      const score = this.calculateScore(elevator, request);
      if (score < bestScore) {
        bestScore = score;
        bestElevator = elevator;
      }
    }

    if (bestElevator) {
      bestElevator.addRequest(request);
    } else {
      console.log("⏳ All elevators busy, request queued");
      this.pendingRequests.push(request);
    }
  }

  calculateScore(elevator: Elevator, request: Request): number {
    const distance = Math.abs(elevator.currentFloor - request.sourceFloor);

    if (elevator.direction === Direction.IDLE) return distance;
    if (elevator.direction === request.getDirection()) return distance - 2;

    return distance + 5;
  }

  stepAll() {
    for (const elevator of this.elevators) {
      elevator.step();
    }
  }
}
