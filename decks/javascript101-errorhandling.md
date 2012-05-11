# JavaScript 101<br />Error Handling

---
## Error Handling

- When an error occurs in the browser it asks the user if they'd like to debug.
	- This works well for developers but not client-side users.
- JavaScript provides a few methods for handling errors.

---
## Error Handling
#### `try...catch` statement

	.runnable
	
	try {
		// run code here
		someNonExistentFunction();
	}
	catch(error) {
		// catch errors here
		console.log(error.toString());
	}
	
- The `try...catch` statement allows you to test code for errors.
- The `try` block has code to test.
- The `catch` block executes if there is an error.

---
## Error Handling
#### `throw` statement

	.runnable
	
	try {
		throw "Some Error";
	}	
	catch(error) {
		console.log(error.toString());
	}
	
- The `throw` statement allows you to create an exception that can be caught by the `try..catch` method.
- The item thrown can be an object, string, boolean or integer.