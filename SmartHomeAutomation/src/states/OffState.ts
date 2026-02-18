import { LightState } from "./LightState";
import { SmartLight } from "../SmartLight";
import { OnState } from "./OnState";
import { MotionDetectionState } from "./MotionDetectionState";

export class OffState implements LightState {
  turnOn(light: SmartLight): void {
    console.log("Light turned ON manually.");
    light.setState(new OnState());
  }

  turnOff(light: SmartLight): void {
    console.log("Light is already OFF.");
  }

  detectMotion(light: SmartLight): void {
    console.log("Motion detected. Turning light ON automatically.");
    light.setState(new MotionDetectionState());
  }

  adjustBrightness(): void {
    console.log("Light is OFF. Cannot adjust brightness.");
  }
}
