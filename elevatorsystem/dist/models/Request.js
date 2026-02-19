"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
const Direction_1 = require("../enums/Direction");
class Request {
    constructor(sourceFloor, destinationFloor, people, weight) {
        this.sourceFloor = sourceFloor;
        this.destinationFloor = destinationFloor;
        this.people = people;
        this.weight = weight;
    }
    getDirection() {
        return this.destinationFloor > this.sourceFloor
            ? Direction_1.Direction.UP
            : Direction_1.Direction.DOWN;
    }
}
exports.Request = Request;
//# sourceMappingURL=Request.js.map