import { SmartLight } from "./SmartLight";

const light = new SmartLight();

light.detectMotion();
light.adjustBrightness(false);
light.turnOff();
light.turnOn();
light.adjustBrightness(true);
