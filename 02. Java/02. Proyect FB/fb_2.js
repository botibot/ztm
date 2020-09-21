var database = [
  {
    username: "cayorch",
    password: "password",
  },
  {
    username: "sally",
    password: "123",
  },
  {
    username: "ingrid",
    password: "777",
  },
];

var newsFeed = [
  {
    username: "Boby",
    timeline: "So tired from all that learning",
  },
  {
    username: "Sally",
    timeline: "JavaScript is sooooo cooool!",
  },
];

function isUserValid(user, pass) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === user && database[i].password === pass) {
      return true;
    }
  }
  return false;
}

function logIn(user, pass) {
  if (isUserValid(user, pass)) {
    console.log(newsFeed);
  } else {
    alert("Wrong user and password");
  }
}

var userNamePrompt = prompt("What's your user name?");
var passwordPrompt = prompt("What's your password?");

logIn(userNamePrompt, passwordPrompt);
