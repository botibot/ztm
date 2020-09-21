const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

//Clousures
//a function ran. The function executed It's never going to execute again.
//But it's going to remember that there are references to those variables.
//So the child scope always have access to the parent scope.

//Currying, a function that takes multiple arguments that takes one a a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(3)(4);
const multiplyBy5 = curriedMultiply(5);

//Compose the act of putting 2 functions together where the output of a function is the input of the other.
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num +1;
compose(sum,sum)(5);

// Avoiding side efects, functional purity!
// Deterministic!!