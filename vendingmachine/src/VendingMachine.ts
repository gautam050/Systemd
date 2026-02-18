import type { VendingState } from "./states/VendingState";
import { IdleState } from "./states/IdleState";

export class VendingMachine {
  private currentState: VendingState;

  constructor() {
    this.currentState = new IdleState();
  }

  setState(state: VendingState): void {
    this.currentState = state;
  }

  insertCoin(): void {
    this.currentState.insertCoin(this);
  }

  selectItem(): void {
    this.currentState.selectItem(this);
  }

  dispense(): void {
    this.currentState.dispense(this);
  }
}
