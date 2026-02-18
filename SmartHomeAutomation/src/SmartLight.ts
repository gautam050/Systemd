import { LightState } from "./states/LightState";
import { OffState } from "./states/OffState";

export class SmartLight {
  private state: LightState;

  constructor() {
    this.state = new OffState();
  }

  setState(state: LightState): void {
    this.state = state;
  }

  turnOn(): void {
    this.state.turnOn(this);
  }

  turnOff(): void {
    this.state.turnOff(this);
  }

  detectMotion(): void {
    this.state.detectMotion(this);
  }

  adjustBrightness(isDay: boolean): void {
    this.state.adjustBrightness(this, isDay);
  }
}
