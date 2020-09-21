var toDoL = [
  "clean roon",
  "brush teeth",
  "excercise",
  "study javaScript",
  "eat healthy",
];

// for
// for (var i = 0; i < toDoL.length; i++) {
//   toDoL[i] = toDoL[i] + "!";
//   console.log(toDoL[i]);
// }

var toDoLenght = toDoL.length;
// for (var i = 0; i < toDoLenght; i++) {
//   toDoL.pop();
// }

// console.log(toDoL);

// var toDoLenght = toDoL.length;
// for (var i = 0; i < toDoLenght; i++) {
//   console.log(i);
// }

//for each
toDoL.forEach(function (todo, i) {
  console.log(todo, i);
});

// //While
// var counterOne = 0;
// while (counterOne < 10) {
//   console.log(counterOne);
//   counterOne++;
// }

// var counter2 = 10;
// while (counter2 > 0) {
//   console.log(counter2);
//   counter2--;
// }

// //DO
// var counter3 = 10;
// do {
//   console.log(counter3);
//   counter3--;
// } while (counter3 > 0);
