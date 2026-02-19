"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Building_1 = require("./models/Building");
const Request_1 = require("./models/Request");
const building = new Building_1.Building(3);
building.controller.requestElevator(new Request_1.Request(1, 5, 2, 140));
building.controller.requestElevator(new Request_1.Request(3, 8, 4, 300));
setInterval(() => {
    building.controller.stepAll();
}, 1000);
//# sourceMappingURL=index.js.map