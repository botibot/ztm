//Pass by Reference && pass by value


// Shallow Clone, only clones the first layer of the object
let obj = {
    a: 'a',
    b: 'b',
    c: 'c',
}

let clone = Object.assign({}, obj);
let clone2 = {
    ...obj
};

obj.c = 'modified';

console.log(obj);
console.log(clone);
console.log(clone2);

//deep clone. Clones everything on the object
let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me',
    },
}

let clone = Object.assign({}, obj);
let clone2 = {
    ...obj
};
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "hahahaha"

console.log(clone);
console.log(clone2);
console.log(superClone)