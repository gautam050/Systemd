import { LightState } from "./LightState";
import { SmartLight } from "../SmartLight";
import { OffState } from "./OffState";

export class MotionDetectionState implements LightState {
  turnOn(): void {
    console.log("Light already ON due to motion.");
  }

  turnOff(light: SmartLight): void {
    console.log("No motion. Turning light OFF.");
    light.setState(new OffState());
  }

  detectMotion(): void {
    console.log("Motion still detected. Keeping light ON.");
  }

  adjustBrightness(): void {
    console.log("Brightness auto-managed in motion mode.");
  }
}
