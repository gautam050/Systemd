import { Direction } from "../enums/Direction";

export class Request {
  constructor(
    public sourceFloor: number,
    public destinationFloor: number,
    public people: number,
    public weight: number
  ) {}

  getDirection(): Direction {
    return this.destinationFloor > this.sourceFloor
      ? Direction.UP
      : Direction.DOWN;
  }
}
