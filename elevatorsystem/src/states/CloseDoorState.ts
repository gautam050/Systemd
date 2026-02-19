import { ElevatorState } from "./ElevatorState";
import { Elevator } from "../models/Elevator";
import { MovingState } from "./MovingState";

export class CloseDoorState implements ElevatorState {
  handle(elevator: Elevator): void {
    console.log(`Elevator ${elevator.id} doors CLOSED`);

    if (elevator.hasPendingRequests()) {
      elevator.state = new MovingState();
    } else {
      elevator.setIdle();
    }
  }
}
