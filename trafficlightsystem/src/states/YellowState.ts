import { TrafficLightState } from "./TrafficLightState";
import { TrafficLight } from "../TrafficLight";
import { RedState } from "./RedState";

export class YellowState implements TrafficLightState {
  showSignal(): void {
    console.log("YELLOW: Vehicles should slow down.");
  }

  next(light: TrafficLight): void {
    light.setState(new RedState());
  }
}
