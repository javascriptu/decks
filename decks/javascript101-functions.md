# JavaScript 101<br />Functions

---
## Functions

- To keep code from executing when the page is loaded we create functions.
- You can call functions that exist on the page or ones loaded in other JS files.
- JavaScript allows for anonymous functions that are used in callbacks.
- You are allowed to create self-invoking functions.

---
## Functions
#### The syntax of a function

	.runnable
	
	function myFunctionName() {
		console.log("Hello World!");
	}
	
	var something = function() { console.log("It works here"); }
	
	var someObject = {	
		func: function() { console.log("It works here too!"); }
	};
	
	myFunctionName()
	something();
	someObject.func();

---
## Functions
#### The syntax of a function

	.runnable
	
	function myFunctionName() {
		console.log("Hello World!");
	}
	
- The function begins with a `function` statement.
- The name of the function is case sensitive.
- You can set arguments for the function inside the parenthesis.
- JavaScript __does not__ allow for argument default values.
- You can attach functions to variables or object properties.

---
## Functions
#### Arguments

	.runnable 
	
	function something(someval) {
		console.log(arguments[0]);
	}
	
	something("Somewhere");
	
- You can set an unlimited amount of variables.
- JavaScript provides a specialized keyword inside a function called `arguments`
	- You can access this like an array.
	- This is how JavaScript provides function overloading.
- You __cannot__ set default values for arguments as with other languages.

---
## Functions
#### Self-invoking functions

	.runnable  highlight="3:\(\)"
	
	(function() {
		console.log("I will be forgotten after these words.");
	})();
	
- You can create anonymous self-invoking functions.
- These will execute immediately.
- Once the function is run all information inside will be deleted and the function itself will not be saved.
- Local variables will be deleted unless they are saved in the global namespace.

---
## Functions 
#### Return statement

	.runnable
	
	function foo() {
		return "bar";
		console.log("You won't see me");
	}
	
	var s = foo();
	
	console.log(s);
	
- Functions can return values.
- Anything that needs to be returned should be set with a `return` statement.
- Once a `return` is called no other code will be executed after the statement.
