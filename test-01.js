//Introducing Scope in JavaScript

//Example 1:
// Function called return console.log inside scope

function sayWord(word) {
	return () => console.log(word);
}

const sayHello = sayWord("hello");

sayHello(); // "hello"


//Example 2
// Console.log inside scope works and outside scope doesn't works

if (true) {
	const foo = "foo";
	console.log(foo); // "foo"
}

console.log(foo); // foo is not defined

