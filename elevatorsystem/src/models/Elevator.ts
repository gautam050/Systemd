import { Direction } from "../enums/Direction";
import { ElevatorState } from "../states/ElevatorState";
import { CloseDoorState } from "../states/CloseDoorState";
import { Request } from "./Request";

export class Elevator {
  static MAX_PEOPLE = 8;
  static MAX_WEIGHT = 680;

  currentFloor = 1;
  direction: Direction = Direction.IDLE;
  state: ElevatorState = new CloseDoorState();

  currentPeople = 0;
  currentWeight = 0;

  requestQueue: Request[] = [];

  constructor(public id: number) {}

  canAccept(request: Request): boolean {
    return (
      this.currentPeople + request.people <= Elevator.MAX_PEOPLE &&
      this.currentWeight + request.weight <= Elevator.MAX_WEIGHT
    );
  }

  addRequest(request: Request): boolean {
    if (!this.canAccept(request)) return false;
    this.requestQueue.push(request);
    this.setDirection(request);
    return true;
  }

  setDirection(request: Request) {
    this.direction = request.getDirection();
  }

  moveOneFloor() {
    if (this.direction === Direction.UP) this.currentFloor++;
    if (this.direction === Direction.DOWN) this.currentFloor--;

    console.log(` Elevator ${this.id} at floor ${this.currentFloor}`);
  }

  hasArrived(): boolean {
    return this.requestQueue.some(
      r => r.sourceFloor === this.currentFloor
    );
  }

  processPassengers() {
    const requestsAtFloor = this.requestQueue.filter(
      r => r.sourceFloor === this.currentFloor
    );

    for (const r of requestsAtFloor) {
      this.currentPeople += r.people;
      this.currentWeight += r.weight;
      console.log(`${r.people} people entered Elevator ${this.id}`);
    }

    this.requestQueue = this.requestQueue.filter(
      r => r.sourceFloor !== this.currentFloor
    );
  }

  hasPendingRequests(): boolean {
    return this.requestQueue.length > 0;
  }

  setIdle() {
    this.direction = Direction.IDLE;
    console.log(`Elevator ${this.id} is IDLE`);
  }

  step() {
    this.state.handle(this);
  }
}
