const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const sayHi = (req, res) => {
  console.log(`Got Request`);
  res.send("Hi, This is William API Server!");
};

app.get("/", sayHi);

app.post("/event", (req, res) => {
  console.log(req.body);
  res.send(`Event Logged`);
});

app.listen(8082, () => {
  console.log(`Server is running on port 8082.`);
});
