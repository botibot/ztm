const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const listeningPort = 9001;

//const hash = require("object-hash");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const database = {
  users: [
    {
      id: "002",
      name: "Jorge",
      email: "jorge@mail.com",
      password: "123",
      entries: 8,
      joined: new Date(),
    },
    {
      id: "123",
      name: "Jhon",
      email: "jhon@mail.com",
      password: "cookies",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "124",
      name: "Sally",
      email: "sally@mail.com",
      password: "bananas",
      entries: 0,
      joined: new Date(),
    },
  ],
};

function hashea() {
  bcrypt.hash(database.users[0].name, 10, (err, hash) => {
    console.log("bcrypt hash method => ", hash);
    return hash;
  });
}

let pwd = hashea();
console.log(pwd);

bcrypt.compare(database.users[0].name, pwd, (err, result) => {
  //true
  console.log("its the name");
});

bcrypt.compare("not really", pwd, (err, result) => {
  //true
  console.log("Not the name");
});

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/sigin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json(database.users[0]);
  } else {
    res.status(400).json("error logging in");
  }
  //  res.json("signed in");
});

app.post("/register", (req, res) => {
  const { email, name, password } = req.body;
  database.users.push({
    id: "125",
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date(),
  });
  res.json(database.users[database.users.length - 1]);
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    res.status(400).json("no user found");
  }
});

app.put("/image", (req, res) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  });
  if (!found) {
    res.status(400).json("no user found");
  }
});

app.listen(listeningPort, () => {
  console.log("app is running on port:", listeningPort);
});
