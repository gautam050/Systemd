import { ATM } from "../ATM";

export interface ATMState {
  insertCard(atm: ATM): void;
  enterPin(atm: ATM): void;
  withdrawCash(atm: ATM): void;
  dispenseCash(atm: ATM): void;
}
