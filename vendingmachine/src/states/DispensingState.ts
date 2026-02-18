import type { VendingState } from "./VendingState";
import { VendingMachine } from "../VendingMachine";
import { IdleState } from "./IdleState";

export class DispensingState implements VendingState {

  insertCoin(_: VendingMachine): void {
    console.log("Please wait, dispensing in progress.");
  }

  selectItem(_: VendingMachine): void {
    console.log("Already dispensing.");
  }

  dispense(machine: VendingMachine): void {
    console.log("Dispensing item...");
    console.log("Returning to Idle state.");
    machine.setState(new IdleState());
  }
}
