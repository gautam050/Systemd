import { TrafficLightState } from "./TrafficLightState";
import { TrafficLight } from "../TrafficLight";
import { YellowState } from "./YellowState";

export class GreenState implements TrafficLightState {
  showSignal(): void {
    console.log("GREEN: Vehicles can move.");
  }

  next(light: TrafficLight): void {
    light.setState(new YellowState());
  }
}
