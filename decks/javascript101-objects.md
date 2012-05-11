# JavaScript 101<br />Objects

---
## Objects

- JavaScript is an Object-based programming language.
- You can created your own objects and set their values
- `Properties` are are values associated with `Objects`.
- `Methods` are actions to be performed on `Objects`.

---
## Objects
#### Properties

	.runnable
	
	var str = "Some String";
	
	console.log(str.length);
	
- You can use properties to get information about an object.
- It will return a value based on the request.
- If the property doesn't exist an error will be thrown.

---
## Objects
#### Methods

	.runnable
	
	var str = "Some String";
	
	console.log(str.toUpperCase());
	
- Methods allow you to manipulate the object.
- It copies the object in the transformation so the change isn't permanent.

---
## Objects
#### Strings
	
	var str = "Some string";
	
- A string Object is used to store a piece of string text.

---
## Objects
### Date
	
	new Date() // current date and time
	new Date(milliseconds) //milliseconds since 1970/01/01
	new Date(dateString)
	new Date(year, month, day, hours, minutes, seconds, milliseconds)
	
- The `Date` object is used to work with dates and times.
- There are 4 ways to create a new `date` object.

---
## Objects
#### Arrays

	var arr = new Array();
	
- `Arrays` are special objects that can hold more than one value.
- You can iterate and manipulate values to an array.
- You can resort and push new values onto the array.
- JavaScript works with 0-based index arrays.

---
## Objects
#### Boolean

	var bool = new Boolean();
	
- These are boolean objects similar to ones that exist in other languages.
- It works on true or false properties.
- If 0, -0, null, "", false, undefined or NaN are passed to it, it will be set to false.

---
## Objects
#### Math

	var x = Math.PI;
	
- Used to work with mathematical values.
- Has set of mathematical methods when working with integers.

---
## Objects
#### RegExp

	var patt=new RegExp(pattern,modifiers);
	
- Regular expression searches for patterns in strings.
- It is a powerful tool for searching.
- JavaScript provides several search and replace functions.
	
