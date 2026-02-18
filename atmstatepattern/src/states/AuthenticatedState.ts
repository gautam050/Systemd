import { ATMState } from "./ATMState";
import { ATM } from "../ATM";
import { DispensingCashState } from "./DispensingCashState";

export class AuthenticatedState implements ATMState {
  insertCard(): void {
    console.log("Transaction in progress.");
  }

  enterPin(): void {
    console.log("Already authenticated.");
  }

  withdrawCash(atm: ATM): void {
    console.log("Processing withdrawal...");
    atm.setState(new DispensingCashState());
  }

  dispenseCash(): void {
    console.log("Select withdrawal first.");
  }
}
