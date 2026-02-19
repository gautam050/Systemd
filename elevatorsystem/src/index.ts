import { Building } from "./models/Building";
import { Request } from "./models/Request";

const building = new Building(3);

building.controller.requestElevator(
  new Request(1, 5, 2, 140)
);

building.controller.requestElevator(
  new Request(3, 8, 4, 300)
);

setInterval(() => {
  building.controller.stepAll();
}, 1000);
