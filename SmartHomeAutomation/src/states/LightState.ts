import { SmartLight } from "../SmartLight";

export interface LightState {
  turnOn(light: SmartLight): void;
  turnOff(light: SmartLight): void;
  detectMotion(light: SmartLight): void;
  adjustBrightness(light: SmartLight, isDay: boolean): void;
}
