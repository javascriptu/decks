# JavaScript 101<br />JS In The browser

---
## JS In The Browser

- JavaScript was invented to work in the browser.
- It provides special functions for manipulating pages.
- Captures events in the browser.
- Uses the DOM (Document Object Model) for manipulating web pages.

---
# Events

---
## JS In The Browser
#### Events

- JavaScript allows you to monitor events that occur in the DOM.
	- __Note__: Some browsers do not provide the same functionality for event handling.
- It can catch `blur` or `focus` of an element.
- the submission of a form.
- Page, image loading.
- `clicks` and changes on form elements and html DOM elements.

---
## JS In The Browser
#### Events

<img src="img/workshop/2/forever-alone.jpg" alt="forever alone" />

- DOM Elements are very lonely.
- They wait until the user interacts with it and then fires off the action which bubbles up the DOM.
- It uses a method known as event bubbling.

---
## JS In The Browser
#### Event Bubbling

- In tightly nested HTML Objects when an event is triggered:
	- The event flows from the inner-most element upward and outward.
- Events travel until they hit the document.
- This idea leads to one problem when clicking on a tightly nested element.
- When multiple nodes are interacted with which one should fire first?

---
## JS In The Browser
#### Event Bubbling

### Who fired first?

<img src="http://scifisurplus.com/wp-content/uploads/2012/02/Greedo-then-Han.jpg" />

---
## JS In The Browser
#### Event Bubbling

- Luckily back when web browsers were being developed a group a very smart people answered this question.
- ### Unfortunately
	- Some worked for Microsoft.
	- The others worked for Netscape.
	
---
## JS In The Browser
#### Event Bubbling
	
- ### According to Microsoft:
	- The element first hit should fire first.
- ### According to Netscape:
	- The innermost element was the intended target so it should fire first.
- ### According to the W3C:
	- We love that idea! Go with it!!
	
---
## JS In The Browser

# Popup Boxes

---
## JS In The Browser
#### Popup Boxes

- JavaScript provides 3 kinds of popup boxes
	- Alert box
	- Confirm Box
	- Prompt Box
	
---
## JS In The Browser
#### Popup Boxes

	.runnable 
	
	alert("Hi There ;)");
	
- An alert box is used to get user's attention.
- User must click "OK".
- All scripting and page actions will not function until Alert box is cleared.

---
## JS In The Browser
#### Popup Boxes

	.runnable
	
	if( confirm("Will you love me forever?") ) {
		alert(":)");
	}
	
- A confirm box is used to confirm or accept something.
- The function returns a boolean value.

---
## JS In The Browser
#### Popup Boxes

	.runnable
	
	function check() {
		var msg = prompt("Who's the best Ninja Turtle?","Leonardo");
		if( msg != null )	{
			console.log("The best turtle is: " + msg);
		}
	}
	
	check();
	
- Used to get information from the user.
- A default value can be set by setting a second parameter.
- If the user clicks cancel it will return an empty string or null.

---
## JS In The Browser

# DOM Manipulation

---
## JS In The Browser
#### DOM Manipulation

- JavaScript provides methods for accessing information from the DOM as well as inserting nodes into the DOM.
- You can grab elements by tag name or id.
- These functions can be unreliable and differ based on browser.
- You can use libraries to extend this functionality.
- All functions return an array of matches found, unless its an id search.

---
## JS In The Browser
#### DOM Manipulation

	document.getElementsByTagName("div");
	
- Returns all elements that match the given tag name.
- When there are multiple matches you can iterate through grabbing the one you need.
- Searches from the top document node and travels down and in.

---
## JS In The Browser
#### DOM Manipulation

	document.getElementById("someID");
	
- Same as previous function except only returns first match.
- In cases of multiple IDs (which is an error) it will grab only the first instance.

---
## JS In The Browser
#### DOM Manipulation

	var element = document.createElement("h1");
	
	element.appendChild(
		document.createTextNode("Teenage Mutant Ninja Turtles"));
	
- You can create html elements and append them to __existing__ elements in the DOM.
- Usage and support varies on browser and version.
- If attempting to append to a node that doesn't exist JS will return an error.

---
## JS In The Browser
#### DOM Manipulation

	var header = document.getElementById("someID");
	header.backgroundColor = "#000";
	
- You can also access and manipulate elements.
- There are several methods to accomplish this.