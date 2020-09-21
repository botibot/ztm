var database = [
  {
    username: "cayorch",
    password: "password",
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

var userNamePrompt = prompt("What's your user name?");
var passwordPrompt = prompt("What's your password?");

function logIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  } else {
    alert("Wrong password");
  }
}

logIn(userNamePrompt, passwordPrompt);
