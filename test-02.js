//Nested Scopes and Functions

if (true) {
	const foo = "foo";
	console.log(foo); // "foo"

	if (true) {
		const bar = "bar";
		console.log(foo); // "foo"

		if (true) {
			console.log(foo, bar); // "foo bar"
		}
	}
}

function foo(bar) {
	function baz() {
		console.log(bar);
	}

	baz();
}

foo("bar"); // "bar"