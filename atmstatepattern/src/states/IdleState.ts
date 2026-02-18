import { ATMState } from "./ATMState";
import { ATM } from "../ATM";
import { CardInsertedState } from "./CardInsertedState";

export class IdleState implements ATMState {
  insertCard(atm: ATM): void {
    console.log("Card inserted.");
    atm.setState(new CardInsertedState());
  }

  enterPin(): void {
    console.log("Insert card first.");
  }

  withdrawCash(): void {
    console.log("Insert card first.");
  }

  dispenseCash(): void {
    console.log("No cash to dispense.");
  }
}
