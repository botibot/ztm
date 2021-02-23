const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");

const listeningPort = 9001;
const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");
const rootFile = require("./controllers/rootFile");

const psql = require("knex")({
  client: "pg",
  connection: {
    host: "db",
    user: "cayorch",
    password: "0Cosmic0",
    database: "smart-brain",
  },
});
//const hash = require("object-hash");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  rootFile.handleRoot(req, res, psql);
});

app.post("/sigin", (req, res) => {
  signin.handleSignin(req, res, psql, bcrypt);
});

app.post("/register", (req, res) => {
  register.handleRegister(req, res, psql, bcrypt);
});

app.get("/profile/:id", (req, res) => {
  profile.handleProfile(req, res, psql);
});

app.put("/image", (req, res) => {
  image.handleEntry(req, res, psql);
});

app.post("/imageurl", (req, res) => {
  image.handleApiCall(req, res);
});

app.listen(listeningPort, () => {
  console.log("app is running on port:", listeningPort);
});
