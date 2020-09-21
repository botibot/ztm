//Method for arrays .flat()
const array = [1, 2, [3, 4, [5]]];
array.flat(5);

const entries = ["bob", "sally", , , , , , , "cindy"];
entries.flat()

//allows to return a flat map from a nested array
//.flatMap();

//String Methods .trimStart .trimEnd
let userEmail = "                 cayorch@mail.com";
let userEmail2 = "jhonydangerous@mail.com       ";

console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

//
console.log("hey");

//fromEntries makes an Object out of a given Array
//Example:

userProfiles = [
    ["commanderTom", 23],
    ["derekZlander", 40],
    ["hansel", 18],
];

Object.fromEntries(userProfiles);

// .entries makes an Array from an Object
Object.entries(userProfiles);

// try - catch 
//try something and if theres an error do something on the catch section. Error handling?

try {
    bob + 'hi'
} catch {
    console.log('messed up')
}

//Error handling ?
try {
    bob + 'hi';
} catch (error) {
    console.log('messed up ' + error);
}