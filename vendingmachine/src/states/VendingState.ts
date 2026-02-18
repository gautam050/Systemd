import type { VendingMachine } from "../VendingMachine";

export interface VendingState {
  insertCoin(machine: VendingMachine): void;
  selectItem(machine: VendingMachine): void;
  dispense(machine: VendingMachine): void;
}

