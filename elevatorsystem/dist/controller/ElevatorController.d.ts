import { Elevator } from "../models/Elevator";
import { Request } from "../models/Request";
export declare class ElevatorController {
    private elevators;
    pendingRequests: Request[];
    constructor(elevators: Elevator[]);
    requestElevator(request: Request): void;
    calculateScore(elevator: Elevator, request: Request): number;
    stepAll(): void;
}
//# sourceMappingURL=ElevatorController.d.ts.map