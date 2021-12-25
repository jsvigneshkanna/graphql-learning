import express from "express";
import resolver from "./resolver.js";
import schema from "./schema.js";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.listen(process.env.PORT | 5000, () => {
  console.log("server running in http://localhost:5000");
});

app.get("/", (req, res) => {
  res.send("Hi to graphql learings");
});

const root = resolver;
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
