import type { VendingState } from "./VendingState";
import type { VendingMachine } from "../VendingMachine";
import { ProcessingState } from "./ProcessingState"; // ✅ normal import

export class IdleState implements VendingState {
  insertCoin(machine: VendingMachine): void {
    console.log("Coin inserted. Moving to Processing state.");
    machine.setState(new ProcessingState());
  }

  selectItem(_: VendingMachine): void {
    console.log("Insert coin first.");
  }

  dispense(_: VendingMachine): void {
    console.log("Nothing to dispense.");
  }
}
