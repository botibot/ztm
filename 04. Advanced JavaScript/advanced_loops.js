const basket = ['apple', 'orange', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000,
}

for (let i = 0; i < basket.length; i++){
    console.log(basket[i]);
}

basket.forEach(item => {
    console.log(item)
});


//new loops ES6+
//for of 
//Iterating over: array, strings
for (item of basket) {
    console.log(item);
}

for (item of 'basket') {
    console.log(item);
}

//for in loop
//enumerating - Loop over properties: objects
for (item in detailedBasket) {
    console.log(item);
}

//switching to see what happens:
// error: VM3688:1 Uncaught TypeError: detailedBasket is not iterable
for (item of detailedBasket) {
    console.log(item);
}

// returned the index, because to JavaScript arrays are Objects.
for (item in basket) {
    console.log(item);
}

// We can think the array is: 
basket = {
    0: 'apples',
    1: 'oranges',
    2: 'grapes',
}