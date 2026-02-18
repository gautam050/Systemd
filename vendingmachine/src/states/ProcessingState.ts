import type { VendingState } from "./VendingState";
import { VendingMachine } from "../VendingMachine";
import { DispensingState } from "./DispensingState";

export class ProcessingState implements VendingState {
  insertCoin(_: VendingMachine): void {
    console.log("Coin already inserted.");
  }

  selectItem(machine: VendingMachine): void {
    console.log("Item selected. Moving to Dispensing state.");
    machine.setState(new DispensingState());
  }

  dispense(_: VendingMachine): void {
    console.log("Select item first.");
  }
}
