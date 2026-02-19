import { ElevatorState } from "./ElevatorState";
import { Elevator } from "../models/Elevator";
import { OpenDoorState } from "./OpenDoorState";

export class MovingState implements ElevatorState {
  handle(elevator: Elevator): void {
    elevator.moveOneFloor();

    if (elevator.hasArrived()) {
      elevator.state = new OpenDoorState();
    }
  }
}
