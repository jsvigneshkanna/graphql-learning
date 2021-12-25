import { nanoid } from "nanoid";

class GtaVehicle {
  constructor(id, { name, seats, speed, type }) {
    this.id = id;
    this.name = name;
    this.seats = seats;
    this.speed = speed;
    this.type = type;
  }
}

const vehicleBucket = {};

const resolver = {
  getvehicles: ({ id }) => {
    return new GtaVehicle(id, vehicleBucket[id]);
  },

  setvehicle: ({ input }) => {
    const id = nanoid();
    vehicleBucket[id] = input;
    return new GtaVehicle(id, vehicleBucket[id]);
  },
};

export default resolver;
