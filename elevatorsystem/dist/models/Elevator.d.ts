import { Direction } from "../enums/Direction";
import { ElevatorState } from "../states/ElevatorState";
import { Request } from "./Request";
export declare class Elevator {
    id: number;
    static MAX_PEOPLE: number;
    static MAX_WEIGHT: number;
    currentFloor: number;
    direction: Direction;
    state: ElevatorState;
    currentPeople: number;
    currentWeight: number;
    requestQueue: Request[];
    constructor(id: number);
    canAccept(request: Request): boolean;
    addRequest(request: Request): boolean;
    setDirection(request: Request): void;
    moveOneFloor(): void;
    hasArrived(): boolean;
    processPassengers(): void;
    hasPendingRequests(): boolean;
    setIdle(): void;
    step(): void;
}
//# sourceMappingURL=Elevator.d.ts.map