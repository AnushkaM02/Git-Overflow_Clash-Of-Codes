const express = require("express");
const app = express();

const dbConnection = require("./utils/dbConnection");

const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

const Routes = require("./utils/allRoutes");

app.use(express.json());
app.use(Routes.User_Route);

app.get("/", async (req, res, next) => {
  res.send("Hello");
});

app.listen(3000, async () => {
  console.log("App running on port 3000");
});
