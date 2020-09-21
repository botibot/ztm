var firstNumber = prompt("Enter first number");
var secondNumber = prompt("Enter second number");
var choice1 = confirm("Would you like to sum ( + ) them?");
var operation1 =
  choice1 === true
    ? alert("The sum is: " + (Number(firstNumber) + Number(secondNumber)))
    : (choice2 = confirm("Would you like to substract ( - ) them?"));
var opertaion2 =
  choice2 === true
    ? alert("The sub is: " + (Number(firstNumber) - Number(secondNumber)))
    : (choice3 = confirm("Would you like to divide ( / ) them?"));
var opertaion3 =
  choice3 === true
    ? alert("The div is: " + Number(firstNumber) / Number(secondNumber))
    : (choice4 = confirm("Would you like to multiply ( * ) them?"));
var opertaion4 =
  choice4 === true
    ? alert("The multi is: " + Number(firstNumber) * Number(secondNumber))
    : alert("No selecction made");

/* alert("The sum is: " + sum); */
