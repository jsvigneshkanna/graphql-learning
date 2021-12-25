import { buildSchema } from "graphql";

const schema = buildSchema(`
    type gtaVehicles {
        id: ID
        name: String
        seats: Int
        speed: Float
        type: vehicleType
    }

    enum vehicleType {
        PD
        Civilian
        Cruise
        Chopper
        Plane
    }

    type query {
        getvehicles(id: ID): gtaVehicles
    }

    type gtaVehiclesInput {
        id: ID
        name: String!
        seats: Int
        speed: Float
        type: vehicleType!
    }

    type mutation {
        setvehicle(input: Input): gtaVehicles
    }
`);

export default schema;
