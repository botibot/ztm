//Advanced Arrays
const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((number) => {
  double.push(number * 2);
});

console.log('forEach', double);

// map, filter, reduce

//Map
/* const mapArray = array.map((number) => {
  return number * 2;
}); */

const mapArray = array.map(num => num * 2);
console.log('map', mapArray);

//Filter
const filterArray = array.filter(num => num > 5);
console.log('map', filterArray);

//Reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 5);

console.log('reduce', reduceArray);