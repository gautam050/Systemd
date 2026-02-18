import { ATMState } from "./ATMState";
import { ATM } from "../ATM";
import { AuthenticatedState } from "./AuthenticatedState";

export class CardInsertedState implements ATMState {
  insertCard(): void {
    console.log("Card already inserted.");
  }

  enterPin(atm: ATM): void {
    console.log("PIN verified.");
    atm.setState(new AuthenticatedState());
  }

  withdrawCash(): void {
    console.log("Enter PIN first.");
  }

  dispenseCash(): void {
    console.log("Enter PIN first.");
  }
}
