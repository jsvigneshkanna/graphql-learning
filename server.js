import express from "express";

const app = express();

app.listen(process.env.PORT | 5000, () => {
  console.log("server running in http://localhost:5000");
});

app.get("/", (req, res) => {
  res.send("Hi to graphql learings");
});
