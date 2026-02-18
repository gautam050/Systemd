import { ATMState } from "./states/ATMState";
import { IdleState } from "./states/IdleState";

export class ATM {
  private currentState: ATMState;

  constructor() {
    this.currentState = new IdleState();
  }

  setState(state: ATMState): void {
    this.currentState = state;
  }

  insertCard(): void {
    this.currentState.insertCard(this);
  }

  enterPin(): void {
    this.currentState.enterPin(this);
  }

  withdrawCash(): void {
    this.currentState.withdrawCash(this);
  }

  dispenseCash(): void {
    this.currentState.dispenseCash(this);
  }
}
