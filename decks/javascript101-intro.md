# JavaScript 101

---
## JavaScript 101
#### What is JavaScript?

- JavaScript = EMCAScript.
	- JavaScript was standardized ECMA-262 by ECMA Organization in 1997.
- JavaScript was invented to add interactivity to HTML pages.
- JavaScript is a scripting language.
- JavaScript is an interpreted language.
- A non-blocking language.
- Single-threaded language.

---
## JavaScript 101
#### Are Java &amp; JavaScript the same?

- ### No!
	- Java and JavaScript are two completely different languages in concept and design.
	- Java is a more complex and powerful language similar to C and C++.
	- Java was created by James Gosling, Mike Sheridan and Patrick Naughton in 1991.
	- JavaScript was created by Brendan Eich in in 1995.
	- Originally JavaScript was known as LiveScript.
	
	
---
## JavaScript 101
#### What can you do with JavaScript?

- ### JavaScript Can
	- React to events.
	- Read/Write and Manipulate HTML Elements.
	- Validate Data.
	- Detect User's browser, Read Cookies.
	- Get/Send Data Asynchronously to server.
	- Write server-side applications*.
	
---
## JavaScript 101

# Interpreted Vs. Compiled Languages.

---
## JavaScript 101
#### Interpreted Vs. Compiled Languages.

- ### Compiled:
	- Compilers parse the instructions into machine code.
	- Provide better performance compared to Interpreted code.
	
- ### Interpreted:
	- Code is executed immediately after parsing.
	- Doesn't perform as fast as compiled code.
	- Easier to code/manage.
	- The interpreter must exist on each machine the code is run on.
	
---
## JavaScript 101
#### Loose (Weak) Typing

- Unlike lower-level languages (C, C++), JavaScript is Loosely-typed.
- JavaScript will take a var and determine what "type" it is (Boolean, Integer, String, etc).
- This requires less work on the programmer because the interpreter makes certain conversions.
- Everything is resolved at runtime.

---
## JavaScript 101
#### Loose (Weak) Typing

	.runnable
	
	console.log(typeof 1); 
	console.log(typeof "someText");
	console.log(typeof {});
	console.log(typeof false);
	console.log(typeof function() { });
	
---
## JavaScript 101
#### Loose (Weak) Typing

	.runnable 
	var error = "Loose typing does have issues.",
		success = "Loose typing is perfect.";
		
	console.log( 1000 != 1e3 ? success : error);
	
- Loose typing can cause issues when it comes to debugging.
- Sometimes it will unexpectedly convert variables to the incorrect type.