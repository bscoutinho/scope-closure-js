//Scope of let, const, and var in JavaScript

if (true) {
	const foo = "foo";
	console.log(foo); // "foo"
}

console.log(foo); // Uncaught ReferenceError: foo is not defined

// var

function foo() {
	if (true) {
		var foo = "foo";
	}
	console.log(foo);
}

foo(); // "foo"

