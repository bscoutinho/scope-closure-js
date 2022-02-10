// Global and Module Scope in JavaScript


// Example 01
<script>
	const foo = "foo";
</script>
<script>
	console.log(foo); // "foo"
		
	function bar() {
		if (true) {
			console.log(foo);
		}
	}

	bar(); // "foo"
</script>


// Example 02
<script type="module">
	const foo = "foo";
</script>
<script>
	console.log(foo); // Uncaught ReferenceError: foo is not defined
</script>
