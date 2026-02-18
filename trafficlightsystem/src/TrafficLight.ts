import { TrafficLightState } from "./states/TrafficLightState";
import { RedState } from "./states/RedState";

export class TrafficLight {
  private currentState: TrafficLightState;

  constructor() {
    this.currentState = new RedState(); // Initial state
  }

  setState(state: TrafficLightState): void {
    this.currentState = state;
  }

  show(): void {
    this.currentState.showSignal();
  }

  change(): void {
    this.currentState.next(this);
  }
}
