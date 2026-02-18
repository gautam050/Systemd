import { LightState } from "./LightState";
import { SmartLight } from "../SmartLight";
import { OffState } from "./OffState";
import { BrightnessAdjustmentState } from "./BrightnessAdjustmentState";

export class OnState implements LightState {
  turnOn(): void {
    console.log("Light is already ON.");
  }

  turnOff(light: SmartLight): void {
    console.log("Turning light OFF.");
    light.setState(new OffState());
  }

  detectMotion(): void {
    console.log("Light is ON. Motion ignored.");
  }

  adjustBrightness(light: SmartLight, isDay: boolean): void {
    light.setState(new BrightnessAdjustmentState(isDay));
  }
}
