import { ElevatorState } from "./ElevatorState";
import { Elevator } from "../models/Elevator";
import { CloseDoorState } from "./CloseDoorState";

export class OpenDoorState implements ElevatorState {
  handle(elevator: Elevator): void {
    console.log(`Elevator ${elevator.id} doors OPEN at floor ${elevator.currentFloor}`);

    elevator.processPassengers();

    setTimeout(() => {
      elevator.state = new CloseDoorState();
    }, 2000);
  }
}
