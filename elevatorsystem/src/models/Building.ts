import { Elevator } from "./Elevator";
import { ElevatorController } from "../controller/ElevatorController";

export class Building {
  controller: ElevatorController;

  constructor(elevatorCount: number) {
    const elevators = Array.from(
      { length: elevatorCount },
      (_, i) => new Elevator(i + 1)
    );
    this.controller = new ElevatorController(elevators);
  }
}
