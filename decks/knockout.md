# Building Applications With<br />Knockout

<script src="scripts/knockout-2.1.0.js"></script>

---
## Knockout

> Knockout is a JavaScript library that helps you to create rich, responsive display and editor user interfaces with a clean underlying data model.
> <cite>knockoutjs.com</cite>

---
## Knockout

- Automatically updates parts of your UI whenever the data model changes.
- Uses declarative bindings to connect your UI to parts of your ViewModel.
- Easily extendable to implement custom behaviors for reuse.
- Pure JavaScript library.
- Compact, only 13kb minified.
- Works with modern web browsers.
- Makes use of the MVVM design pattern.

---
## Knockout
	
### ViewModel
	function appViewModel() {
		this.firstName = "Punky";
		this.lastName = ko.observable();
	}
	
	ko.applyBindings(new appViewModel());

### View
code src="knockout/ko-basic-object.txt"
	
---
## Knockout

	.runnable globals="ko"
	function appViewModel() {
		this.firstName = "Punky";
		this.lastName = ko.observable("Brewster");
	}

	ko.applyBindings(new appViewModel());
	

<span data-bind="text: firstName"></span>
<span data-bind="text: lastName"></span>

---
## Knockout

### ViewModel
	function appViewModel() {
		this.firstName = "Punky";
		this.lastName = ko.observable("Brewster");
	}

	ko.applyBindings(new appViewModel());
	
### View
code src="knockout/ko-basic-object-b.txt"

---
## Knockout

	.runnable globals="ko"
	function appViewModel() {
		this.firstName = "Punky";
		this.lastName = ko.observable("Brewster");
	}
	ko.applyBindings(new appViewModel());
	
<input data-bind="value: lastName, valueUpdate: 'keyup'" />
<span data-bind="text: firstName"></span>
<span data-bind="text: lastName"></span>

---
## Knockout

### ViewModel
	function appViewModel() {
		this.firstName = ko.observable("Punky");
		this.lastName = ko.observable("Brewster");
		
		this.fullName = ko.computed(function() {
			return this.firstName + " " + this.lastName;
		}, this);
	}
	ko.applyBindings(new appViewModel());
	
### View
code src="knockout/ko-basic-object-c.txt"

---
## Knockout

	.runnable globals="ko"
	function appViewModel() {
		this.firstName = ko.observable("Punky");
		this.lastName = ko.observable("Brewster");
		
		this.fullName = ko.computed(function() {
			return this.firstName() + " " + this.lastName();
		}, this);
	}
	ko.applyBindings(new appViewModel());
	
First: <input data-bind="value: firstName, valueUpdate: 'keyup'" /><br />
Last: <input data-bind="value: lastName, valueUpdate: 'keyup'" /><br />
<span data-bind="text: fullName()"></span>

---
# Knockout<br />Observables

<script src="scripts/knockout-2.1.0.js"></script>

---
## Knockout
#### Observables

- Knockout introduces a concept called Observables to update a View's UI.
- Observables are special JavaScript Objects that notify subscribers about changes.
- You can integrate a ModelView into an existing View by adding a data-bind syntax.
- Subscriptions are done automatically by Knockout but it is possible to explicitly subscribe to an observable.
- There are 3 types of "observables":
	- __observable__: For observing a single string/numeric/boolean object.
	- __observableArray__: For storing array-like objects.
	- __computed__: Used for concatenating/validating observables.
	
---
## Knockout
#### Observables

	// read
	appViewModel.firstName();
	
	// write
	appViewModel.firstName("Peter");
	
	// writeable (chain);
	appViewModel.firstName("Peter").lastName("Parker");
	
- To read an observable simply call the observable with no parameters.
- To write to an observable call it and set in the parameters. You can even chain multiple writes together.

---
## Knockout
#### observable()

	function appViewModel() {
		this.firstName = ko.observable();
		this.staticValue = "Thundercats";
	}
	
- Observes changes to a single object.
- You can set a "static" value by simply setting it to a string.

---
## Knockout
#### observableArray()

	function appViewModel() {
		this.myChildHoodTvShows = ko.observableArray([
			{name: "Teenage Mutant Ninja Turtles", rating: 10},
			{name: "Darkwing Duck", rating: 7}
		]);
	}
		
- An `observable()` is good for monitoring the state of a single object. `ObservableArray()` is meant to monitor a collection of objects.
- Monitors objects in an array and __not__ the state of those Objects.
- An ObservableArray is just like an Observable with added array-like functionality.
- Knockout adds functions to Observable arrays to access information in the same way as you access any other JavaScript Array except its functions are cross-browser compatible.

---
## Knockout

<script type="codemirror">
	function appViewModel() {
		var self = this;
		this.firstName = ko.observable();
		this.lastName = ko.observable();
		this.fullName = ko.observable();
		this.add = function() {
			this.myChildHoodTvShows.unshift({ name: this.addName()});
			this.addName("");
		};
		this.remove = function(tvshow) {
			self.myChildHoodTvShows.remove(tvshow);
		}
	}
	appView = new appViewModel();
</script>

	.runnable globals="ko"
	appView.addName = ko.observable('');
	appView.myChildHoodTvShows = ko.observableArray([
		{name: "Teenage Mutant Ninja Turtles"},
		{name: "Darkwing Duck"}
	]);
	ko.applyBindings(appView);
	
<input placeholder="Tv Show" data-bind="value: addName" /><button data-bind="click: add">Add</button>
<ul data-bind="foreach: myChildHoodTvShows">
	<li data-bind="text: name, click: $root.remove" style="cursor: pointer;"></li>
</ul>

---
## Knockout
#### computed()

<script type="codemirror">
	function appViewModel() {
		this.addName = "";
		this.add = "";
		this.myChildHoodTvShows = "";
	}
	var appView = new appViewModel();
</script>
	.runnable globals="ko"
	appView.firstName = ko.observable("Punky");
	appView.lastName = ko.observable("Brewster");
	appView.fullName = ko.computed(function() {
		return appView.firstName() + " " + appView.lastName();
	});
	ko.applyBindings(appView);
	
<span data-bind="text: fullName"></span>

- computed are dependent observables.
- They rely on data from other observables to perform a given task and return a result.
- Inside a function you would pass this as the second parameter in the computed function so you can use this internally to the function.
- Can be used to validate observables and change statuses accordingly.

---
## Knockout
#### computed() - throttle

	this.fullName = ko.computed(function() {
		return this.firstName() + " " + this.lastName();
	}, this).extend({throttle: 500 });

- In a computed function all observables that it depends on will trigger the computed to update as the values are changed.
- The throttle allows you to extend a computed function to not trigger until x of milliseconds after the value has stopped being updated.
	
---
## Knockout
#### Subscribing to Observables

	// subscribe to an observable
	var subscrb = myViewModel.someObservable.subscribe(
		function(newValue) {
		// some code on update
	});
	
	// unsubscribe to an observable
	subscrb.dispose();
	
- Knockout allows you to implicitly subscribe to an observables update.
- This is an advanced technique and you won't need to use this often.

---
# Knockout<br />Bindings

---
## Knockout
#### Bindings

- Knockout provides several bindings to control:
	- Text/Appearance.
	- Flow.
	- Form Fields and Events.
	- Templates.
- You can also create your own custom bindings.

---
## Knockout
#### Bindings - visible

code src="knockout/ko-bindings-visible.txt"

- Used to display when the parameter given resolves to a true-ish value.
- When a value like false (boolean), null, undefined, 0, etc. it will set `element.style.display` to `none`.
- When parameter resolves to true (boolean), not-empty, 1, etc. it will set `element.style.display` to `visible`.
- If the element is an observable object and not visible Knockout will only update it once on load and then ignore any change updates to that object.
- When the element is visible and an observable object Knockout will update to subscribed changes as normal.

---
## Knockout
#### Bindings - text

code src="knockout/ko-bindings-text.txt"

- Used mostly on `span` or `em` tags. The text binding inserts an observable to a DOM node's `innerText`.
- It will overwrite any previous values.
- If object is observable Knockout will update the innerText when the object is changed.
- You can bind this to a computed observable if you need to perform a function to the displayed result.
- You can't insert html or scripts using text, they will be rendered as literal text and not render the html.

---
## Knockout
#### Bindings - html

code src="knockout/ko-bindings-html.txt"

- The HTML binding allows you to insert HTML code into a DOM element.
- Use this instead of `text` when HTML/Script tags are to be inserted.

---
## Knockout
#### Bindings - css

code src="knockout/ko-bindings-css.txt"

- The css binding allows you to add or remove a named css styling from a DOM element.
- You can also set multiple css elements at once.
- If the object is an observable value Knockout will re-evaluate and update the css setting each time the value is changed.

---
## Knockout
#### Bindings - style

code src="knockout/ko-bindings-style.txt"

- If you want to set a style for an element you can use this method.
- All style properties must be the valid JavaScript equivalents (ie. font-weight must be fontWeight).
- You can set multiple style attributes the same way you use the css binding.

---
## Knockout
#### Bindings - attr

code src="knockout/ko-bindings-attr.txt"

- This is useful when you need to apply a value from your ViewModel to an attribute in your View. 
- Will update whenever the observable object changes.

---
## Knockout
#### Control Flow

- Knockout provides a set of bindings that allow you to control the display of a view.
	- foreach.
	- if.
	- ifnot.
	- with.
	
---
## Knockout
#### Control Flow - foreach

code src="knockout/ko-bindings-foreach.txt"

- duplicates a block of code for each item in an array and binds each intro to that corresponding item in an array.
- Good for displaying list or tables of data from an `observableArray`.
- When the array has items added or removed from it the block of code will automatically be updated accordingly.

---
## Knockout
#### Control Flow - if/ifnot

code src="knockout/ko-bindings-if.txt"

- Similar to the visible binding.
- The if/ifnot statement will only display the DOM element and apply observables to descendants of that block if the condition results to true.
- The ifnot is the inverse to the if statement and will check for conditions which resolve to false.

---
## Knockout
#### Control Flow - with

code src="knockout/ko-bindings-with.txt"

- This creates a new binding context so that child elements are bound to a specific context.
- Used in conjunction with foreach, if, ifnot.

---
## Knockout
#### Form Fields

- Knockout provides methods to control form actions and events done to them.
	- click.
	- event.
	- submit.
	- enable.
	- disable.
	- value.
	- hasfocus.
	- checked.
	- options.
	- selectedOptions.
	- uniqueName.
	
---
## Knockout
#### Form Fields

- ### event:
	- Allows you to bind to events like mouseover, mouseout, etc.
- ### Options:
	- Meant to be bound to an Array and used with a `select` element.
- ### selectedOptions:
	- Meant to be bound to an Array. Updates object when items are selected/deselected in a multi-select element.
	
---
## Knockout
#### Custom Bindings

	ko.bindingHandlers.yourBindingName = {
		init: function(element, valueAccessor, 
				allBindingsAccessor, viewModel) {
			// your init code here.
		},
		update: function(element, valueAccessor, 
				allBindingsAccessor, viewModel) {
			// your update code here.
		}
	};

- If a default binding doesn't work for you Knockout makes it easy to create your own.
- You can add your bindings into your ViewModel file.
- They will be called upon in the same way that internal Bindings are called.
- You can incorporate libraries like jQuery to update changes on observables when the DOM is manipulated.

---
## Knockout
#### Virtual Elements

	<!-- ko if: something() -->
		<span>Show Me!</span>
	<!-- /ko -->
	
- Knockout supports virtual tags.
- This is an advanced technique and won't normally use this in most cases.

---
# Knockout<br />Loading/Saving JSON data

---
## Knockout
#### JSON

- Knockout doesn't care how the JSON data is loaded.
	- You can use your own custom AJAX methods.
	- Use jQuery's AJAX methods to get data from the server.
	
---
## Knockout
#### JSON

	$.getJSON("some/url", function(data) { 
		myViewModel.someObservable(data.someUpdate);
	});
	
---
## Knockout
#### JSON

	var myModel = {
		firstName: ko.observable()
	}
	
	ko.toJSON(myModel);

- You can convert ViewModels to plain JSON objects using Knockout's built in serialization.
- Converts all computed and observable arrays as well.

---
## Knockout
#### JSON

	var myModel = {
		firstName: ko.observable()
	}
	
	ko.toJS(myModel);

- You can convert the ViewModel into a plain JavaScript Object as well by calling ko.toJS
- This will grab the latest observable values and create an Object without any bindings associated with it.

---
# Knockout<br />Mapping

---
## Knockout
#### Mapping

- Knockout allows you to map arbitrary JavaScript objects into observable items.
- This will save time when creating ViewModels with a lot of Observables.
- A more conventional way of handling information.
- Single items are converted into observables.

---
## Knockout
#### Mapping

### Request
	$.getJSON();

### Server Data

	{
		username: "Alf"
	}
	
### ViewModel
	var viewModel = ko.mapping.fromJS(data);
	
---
## Knockout
#### Mapping

### ViewModel (with errors)
	var data = {
	    name: 'Scot',
	    children: [
	        { id : 1, name : 'Alicw' }
	    ]
	}
	var viewModel = ko.mapping.fromJS(data);
	
### ViewModel (fixes)
	var data = {
	    name: 'Scott',
	    children: [
	        { id : 1, name : 'Alice' }
	    ]
	}
	ko.mapping.fromJS(data, viewModel);
	
---
## Knockout
#### Mapping

### ViewModel
	var data = {
	    name: 'Scott',
	    children: [
	        { id : 1, name : 'Alice' }
	    ]
	}
	var map = {
	    'children': {
	        key: function(data) {
	            return ko.utils.unwrapObservable(data.id);
	        }
	    }
	}
	viewModel = ko.mapping.fromJS(data, map);
	
---
## Knockout
#### Mapping

	var data = {
	    name: 'Graham',
	}

	var mapping = {
	    'name': {
	        update: function(options) {
	            return options.data + 'foo!';
	        }
	    }
	}
	var viewModel = ko.mapping.fromJS(data, mapping);
	
---
# Knockout<br />Templates

---
## Knockout
#### Templates

- Knockout provides two main methods for using Templates with your UI.
	- ### Native Templating: 
		- This connects to the underlying foreach, with, if statements.
		- Grabs arbitrary HTML data on your page and uses it as a template to render.
		- Does not need an external library to use.
	- ### String-based Templating:
		- You can extend knockouts JS template to use an external templating system.
		- Knockout will take the ViewModel data send it to the external template system and then inject the resulting data into the View.
		- Was built with jQuery templates in mind but you can integrate any system (underscore, handlebars, mustache, etc.).
		
---
## Knockout
#### Templates - native

code src="knockout/ko-templates-native.txt"

- You reference the named template.
- Setting the foreach option will tell knockout to iterate through its values.
- The template itself will run inside the `someData` context and display elements accordingly.
- You can reference $root to give templated items access to the ViewModel.
- Provides callback functions when template is inserted:
	- afterAdd
	- afterRender
	- beforeRemove
- The callback functions pass the DOM element for the manipulated node.

---
## Knockout
#### Templates - string-based

	ko.setTemplateEngine(new CustomTemplateEngine());

- Knockout's internal template system work well for most situation but if you want to use a third-party system Knockout allows you to extend its functionality to do so.
- It comes with support for jQuery templates so to use that just include the js file in the header tag.