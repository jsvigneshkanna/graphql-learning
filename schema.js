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

    type Query {
        getvehicles(id: ID): gtaVehicles
    }

    input gtaVehiclesInput {
        id: ID
        name: String!
        seats: Int
        speed: Float
        type: vehicleType!
    }

    type Mutation {
        setvehicle(input: gtaVehiclesInput): gtaVehicles
    }
`);

export default schema;
