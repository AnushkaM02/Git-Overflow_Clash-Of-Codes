const session = require("express-session");
const cors = require("cors");
const express = require("express");
const app = express();

const dbConnection = require("./utils/dbConnection");

const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
    urlencoded: false,
  })
);

app.use(bodyParser.json());

app.use(cors());

app.use(
  session({
    name: process.env.SESSION_NAME,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60,
      sameSite: true,
    },
  })
);

const Routes = require("./utils/allRoutes");

app.use(express.json());
app.use(Routes.User_Route);

app.get("/", async (req, res, next) => {
  res.send("Hello");
});

app.listen(3000, async () => {
  console.log("App running on port 3000");
});
