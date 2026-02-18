import { LightState } from "./LightState";
import { SmartLight } from "../SmartLight";
import { OnState } from "./OnState";

export class BrightnessAdjustmentState implements LightState {
  constructor(private isDay: boolean) {}

  turnOn(): void {
    console.log("Light already ON.");
  }

  turnOff(light: SmartLight): void {
    console.log("Turning light OFF.");
    light.setState(new OnState());
  }

  detectMotion(): void {
    console.log("Motion ignored during brightness adjustment.");
  }

  adjustBrightness(light: SmartLight): void {
    if (this.isDay) {
      console.log("Daytime detected. Reducing brightness.");
    } else {
      console.log("Nighttime detected. Increasing brightness.");
    }
    light.setState(new OnState());
  }
}
