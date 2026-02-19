"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elevator = void 0;
const Direction_1 = require("../enums/Direction");
const CloseDoorState_1 = require("../states/CloseDoorState");
class Elevator {
    constructor(id) {
        this.id = id;
        this.currentFloor = 1;
        this.direction = Direction_1.Direction.IDLE;
        this.state = new CloseDoorState_1.CloseDoorState();
        this.currentPeople = 0;
        this.currentWeight = 0;
        this.requestQueue = [];
    }
    canAccept(request) {
        return (this.currentPeople + request.people <= Elevator.MAX_PEOPLE &&
            this.currentWeight + request.weight <= Elevator.MAX_WEIGHT);
    }
    addRequest(request) {
        if (!this.canAccept(request))
            return false;
        this.requestQueue.push(request);
        this.setDirection(request);
        return true;
    }
    setDirection(request) {
        this.direction = request.getDirection();
    }
    moveOneFloor() {
        if (this.direction === Direction_1.Direction.UP)
            this.currentFloor++;
        if (this.direction === Direction_1.Direction.DOWN)
            this.currentFloor--;
        console.log(`🚀 Elevator ${this.id} at floor ${this.currentFloor}`);
    }
    hasArrived() {
        return this.requestQueue.some(r => r.sourceFloor === this.currentFloor);
    }
    processPassengers() {
        const requestsAtFloor = this.requestQueue.filter(r => r.sourceFloor === this.currentFloor);
        for (const r of requestsAtFloor) {
            this.currentPeople += r.people;
            this.currentWeight += r.weight;
            console.log(`👥 ${r.people} people entered Elevator ${this.id}`);
        }
        this.requestQueue = this.requestQueue.filter(r => r.sourceFloor !== this.currentFloor);
    }
    hasPendingRequests() {
        return this.requestQueue.length > 0;
    }
    setIdle() {
        this.direction = Direction_1.Direction.IDLE;
        console.log(`⏸️ Elevator ${this.id} is IDLE`);
    }
    step() {
        this.state.handle(this);
    }
}
exports.Elevator = Elevator;
Elevator.MAX_PEOPLE = 8;
Elevator.MAX_WEIGHT = 680;
//# sourceMappingURL=Elevator.js.map