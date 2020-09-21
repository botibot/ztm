// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const newArray = []
array.forEach(user => {
  let { username } = user;
  username = username + '!';
  newArray.push(username);
});

console.log(newArray);


const newArray2 = array.map(user => user.username + '?');

console.log(newArray2);

//Filter the array to only include users who are on team: red

const newArray3 = array.filter(user => user.team === 'red');

console.log(newArray3);

//Find out the total score of all users using reduce

const total = array.reduce((acc, user) => {
	return acc + user.score
}, 0);
console.log(total);


const totalScore = array.reduce((acc, user) => acc + user.score, 0);
console.log(totalScore);
//Create an array using map that has all the usernames with a "? to each of the usernames

// (1), what is the value of i? 
// 5 

// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num) => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);