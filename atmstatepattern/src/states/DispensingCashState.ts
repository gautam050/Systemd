import { ATMState } from "./ATMState";
import { ATM } from "../ATM";
import { IdleState } from "./IdleState";

export class DispensingCashState implements ATMState {
  insertCard(): void {
    console.log("Please wait, dispensing cash.");
  }

  enterPin(): void {
    console.log("Please wait.");
  }

  withdrawCash(): void {
    console.log("Already dispensing cash.");
  }

  dispenseCash(atm: ATM): void {
    console.log("Cash dispensed.");
    console.log("Returning to idle state.");
    atm.setState(new IdleState());
  }
}
