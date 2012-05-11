# JavaScript 101<br />Loops

---
## Loops

- JavaScript provides a few ways to execute a block of code a set period of times.
- Also allows methods to breakout of the loops and stop execution.
- ### Loops:
	- __for__ loop: Used when you know in advance how many times the code block should be executed.
	- __while__ loop: Loop will execute as long as a given condition is true.
	- __do while__ loop: Will execute the code block once and then repeat as long as condition is true.
	- __ for in __ loop: Will loop through the properties of an object.
	
---
## Loops
#### `for` loop

	.runnable 
	
	var tmmnt = new Array("Leonardo","Donatello",
		"Michelangelo","Raphael");
	
	for( var i=0; i <= 10; i++ ) {
		console.log(i);
	}
	
- You must set the iterator default value and how many times it must loop.
- The iterator will be available inside the statement so you can use it with arrays.

---
## Loops
#### `while` loop

	.runnable
	
	var i = 0;
	
	while( i < 10 ) {
		console.log("Echo'd line.");
		i++;
	}
	
- Loops through the block of code while the condition is true.
- It will evaluate the condition __BEFORE__ it executes the code.

---
## Loops
#### `do...while` loop

	.runnable
	
	var i = 0;
	
	do {
		console.log("Echo'd line.");
		i++;
	} while( i < 10 );
	
- Loops through the block of code while the condition is true.
- It will evaluate the condition __AFTER__ it executes the code.

---
## Loops
#### `for...in` loop

	.runnable
	
	var tmmnt = {
		name: "Leonardo",
		weapon: "Swords",
		status: "The Best Ninja Turtle!"
	};
	
	for( turtle in tmmnt ) {
		console.log(tmmnt[turtle]);
	}
	
- Allows you to loop through properties of an object.

---
## Loops
#### `break` statement

	.runnable
	
	for( var i=0; i<10; i++ )
	{
		console.log("Echo'd Line: " + i);
		if( i == 8 ) {
			break;
		}
	}
	
- Ends the execution of the block of code.
- No code will be run past the break point.
- Works for all loops.
	
---
## Loops
#### `continue` statement

	.runnable 
	
	var tmmnt = new Array("Leonardo","Donatello",
		"Michelangelo","Raphael");
	
	for( var i=0; i <= tmmnt.length; i++ ) {
		if( tmmnt[i] == "Michelangelo" ) {
			continue;
		}
		
		console.log(tmmnt[i]);
	}
	
- The `continue` statement will break the current loop and begin at the next one.
- Will `break` at the `continue` line.
- Works for all loops.