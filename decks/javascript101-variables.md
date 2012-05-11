# JavaScript 101<br />Variables

---
## Variables

- JavaScript variables hold values or expressions.
- A variable can be a short name like `x` or a descriptive name like `myFirstName`.
- Variables are case sensitive so `y` is different than `Y`.
- A variable must start with a letter, $, _ and cannot contain any mathematical operators.

---
## Variables
#### Creating
	
	var x;
	var y;
	
	var a = "SomeValue",
		b = 1234;
		
- You can declare variables with or without a value. The `x` and `y` variables declared here will have a null value.
- You can use the `var` keyword multiple times or set several variables with a single `var` declaration.
	- __Note:__ A single `var` declaration for setting multiple variables has faster performance, multiple `vars` are easier to read.
- Redeclaring a variable will cause it to loose its existing value*.

---
## Variables
#### Scope

- Unlike other programming languages any variable created without var keyword will exist in the global namespace.
	- This can cause problems when creating client-side scripts.
- When calling a variable JavaScript will check the local namespace and move up to the global namespace if it's not found.

---
## Variables
#### Scope

	.runnable
	
	var sy = "Hello ";
	
	function say(name) {
		var str = sy + name;
		console.log(str);
		ex = "Hello";
	}
	
	say("Splinter");
	console.log("The variable str is: " 
		+ typeof str + " and the variable sy is: " 
	+ typeof sy + " and the variable ex is: " + typeof ex);
	
---
## Variables
#### Scope

- ### Global
	- All variables created without the var keyword will exist in the global namespace.
	- In a browser context global variables will be deleted when the window is closed.
- ### Local
	- Variables created in functions will be deleted once the function is executed.
	- A variable can only be accessed within the given function.
	- Local variables in different functions can have the same name.
	
---
## Variables 
#### Mathematical Operators

	.runnable
	
	var v = 3
		x = 6,
		y = 9,
		a = "(x + y) * v = ";
		
	console.log(a+((y+x)*v));

- You can perform mathematical operations on variables.
- Since JavaScript is loosely typed you can concatenate strings using same operators.
- Visit: http://www.w3schools.com/js/js_operators.asp for full list of operators.

---
## Variables
#### Comparison Operators

	.runnable 
	
	var v = "Teenage Mutant Ninja Turtles";
	
	if( v == "Teenage Mutant Ninja Turtles" ) {
		console.log("That is the best cartoon ever!");
	} else {
		console.log("I'm sorry, did you mean to say " + v + "?");
	}
	
- Comparison operators are used in logical statements to determine equality or difference between variables.
- They can be used in conditional statements that will take action if criteria is met or not.
- == Allows you to check equality and === checks for exactness (value and type).
- Visit: http://www.w3schools.com/js/js_comparisons.asp for full list of comparison operators.

---
## Variables
#### Assignment Operators

Used to assign values to variables.

	.runnable
	
	var v = 5;
	
	console.log(typeof v);
	console.log(v);
	console.log(v+=4);
	console.log(v-=7);
	console.log(v+=" String");
	console.log(typeof v);
	
---
## Variables
#### Logical Operators

Used to determine the logic between variables or values.

	.runnable
	
	var v = 5;
	
	if( v == 5 || !isNaN(v) ) {
		console.log("This matches.");
	} else {
		console.log("This doesn't match.");
	}