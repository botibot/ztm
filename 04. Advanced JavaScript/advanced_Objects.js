// reference type
var object1 = {
    value: 10
};
var object2 = object1;
var object3 = {
    value: 10
};


// context vs Scope
function b() {
    let a = a;
}

console.log(this);

console.log(this === window);
this.alert("hello");

function a() {
    console.log(this)
};

const object4 = {
    a: function () {
        console.log(this);
    }
}

//instantiation
//Class pretty much means copy of...
class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi i am ${this.name}, I am a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Jorge', 'Dark Wizard');