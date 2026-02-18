import { TrafficLight } from "../TrafficLight";

export interface TrafficLightState {
  showSignal(): void;
  next(light: TrafficLight): void;
}
