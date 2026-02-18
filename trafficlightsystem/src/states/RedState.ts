import { TrafficLightState } from "./TrafficLightState";
import { TrafficLight } from "../TrafficLight";
import { GreenState } from "./GreenState";

export class RedState implements TrafficLightState {
  showSignal(): void {
    console.log("RED: Vehicles must stop.");
  }

  next(light: TrafficLight): void {
    light.setState(new GreenState());
  }
}
