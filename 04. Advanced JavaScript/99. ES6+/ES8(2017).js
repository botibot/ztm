// string padding
// .padStart()
// .padEnd()

'turtle'.padStart(10); // "    turtle"
'turtle'.padEnd(10); // "turtle    "

//  parameters can end with a , and its valid.
const fun = (a, b, c, d, ) => console.log(a);
fun(1, 2, 3, 4, );

const fun = (
    a,
    b,
    c,
    d,
) => console.log(a);
fun(1, 2, 3, 4, );

// 2 new Object Methods
Object.values();
Objests.entries();

//Sample ugly object
let obj = {
    username0: 'Santa',
    username1: 'Rudolph',
    username2: 'Mr. Grich',
}

//Bfore only had Objects.keys()
Object.keys(obj).forEach((key, index) => console.log(index, key, obj[key]));

//New Way
Object.values(obj).forEach(value => console.log(value));
Object.entries(obj).forEach(value => console.log(value));

//Example: 
Object.entries(obj).map(value => value[1] + value[0].replace('username', ''));