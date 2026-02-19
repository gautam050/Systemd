import { Direction } from "../enums/Direction";
export declare class Request {
    sourceFloor: number;
    destinationFloor: number;
    people: number;
    weight: number;
    constructor(sourceFloor: number, destinationFloor: number, people: number, weight: number);
    getDirection(): Direction;
}
//# sourceMappingURL=Request.d.ts.map