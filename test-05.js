// Closures in JavaScript

function sayWord(word) {
	return () => console.log(word);
}

const sayHello = sayWord("hello");

sayHello(); // "hello"



// Example - Callback

function getCarsByMake(make) {
	return cars.filter(x => x.make === make);
}


// Example - Storing state

function makePerson(name) {
	let _name = name;

	return {
		setName: (newName) => (_name = newName),
		getName: () => _name,
	};
}

const me = makePerson("Zach");
console.log(me.getName()); // "Zach"

me.setName("Zach Snoek");
console.log(me.getName()); // "Zach Snoek"


// Example - Private methods

function makePerson(name) {
	let _name = name;

	function privateSetName(newName) {
		_name = newName;
	}

	return {
		setName: (newName) => privateSetName(newName),
		getName: () => _name,
	};
}