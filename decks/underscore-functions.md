# Underscore<br>Function ... Functions

---
### `_.bind(function, object, [arguments])`

Bind a function to an object, meaning that whenever the function is called, the value of this will be the object. Optionally, bind arguments to the function to pre-fill them, also known as partial application.

	.runnable globals='_'
	var func = function(greeting){ return greeting + ': ' + this.name };
	func = _.bind(func, {name : 'moe'}, 'hi');
	
	console.log(func());
	
---
### `_.bindAll(object, [methodNames])`

Binds a number of methods on the object, specified by methodNames, to be run in the context of that object whenever they are invoked. 

	var buttonView = {
	  label   : 'underscore',
	  onClick : function(){ alert('clicked: ' + this.label); },
	  onHover : function(){ console.log('hovering: ' + this.label); }
	};

	_.bindAll(buttonView);

	jQuery('#underscore_button').bind('click', buttonView.onClick);
	
- Very handy for binding functions that are going to be used as event handlers, which would otherwise be invoked with a fairly useless `this`.
- If no methodNames are provided, all of the object's function properties will be bound to it.

---
### `_.memoize(function, [hashFunction])`

Memoizes a given function by caching the computed result.

    .runnable globals='_'

    var timesRun = 0;
    function fibonacci(n) {
      timesRun++;
      return n == 1 || n == 0 ? n : fibonacci(n - 1) + fibonacci(n - 2);
    }

    //fibonacci = _.memoize(fibonacci);

    console.log(fibonacci(10));
    console.log('Ran ' + timesRun + ' times');

Uncomment the memoize line and compare the change in timesRun. Memoization caches results based off of input values.
	
- Useful for speeding up slow-running computations. 
- If passed an optional hashFunction, it will be used to compute the hash key for storing the result, based on the arguments to the original function. 
- The default hashFunction just uses the first argument to the memoized function as the key.

---
### `_.delay(function, wait, [arguments])`

Much like setTimeout, invokes function after wait milliseconds. If you pass the optional arguments, they will be forwarded on to the function when it is invoked.

	.runnable globals='_'
	var log = _.bind(console.log, console);
	_.delay(log, 1000, 'logged later');
	
---
### `_.defer(function, [arguments])`

Defers invoking the function until the current call stack has cleared, similar to using setTimeout with a delay of 0.

	.runnable globals='_'
	_.defer(function(){ console.log('deferred'); });
	
- Useful for performing expensive computations or HTML rendering in chunks without blocking the UI thread from updating. 
- If you pass the optional arguments, they will be forwarded on to the function when it is invoked.

---
### `_.throttle(function, wait)`

Creates and returns a new, throttled version of the passed function that, when invoked repeatedly,
will only actually call the original function at most once per every wait milliseconds.
Useful for rate-limiting events that occur faster than you can keep up with.

	var throttled = _.throttle(updatePosition, 100);
	$(window).scroll(throttled);
	
---
### `_.debounce(function, wait, [immediate])`

Creates and returns a new debounced version of the passed function that will postpone its execution until after `wait` milliseconds have elapsed since the last time it was invoked.

    var lazyLayout = _.debounce(calculateLayout, 300);
    $(window).resize(lazyLayout);
	
	
- Useful for implementing behavior that should only happen after the input has stopped arriving.
- Pass true for the `immediate` parameter to cause debounce to trigger the function on the leading instead of the trailing edge of the wait interval.

---
### `_.once(function)`

Creates a version of the function that can only be called one time.

    .runnable globals='_'
    function runOnce(say) {
      return say;
    }

    var initialize = _.once(runOnce);

    console.log(initialize("Hello World!"));
    console.log(initialize("Hello Again!"));
	
---
### `_.after(count, function)`

Creates a version of the function that will only be run after first being called count times.

    .runnable globals='_'

    function runAfter() {
      return "Hit!";
    }

    var runAfter5 = _.after(5, runAfter);

    _.each([1,2,3,4,5], function(num) {
      var attempt = runAfter5() || "Miss";
      console.log("Try #" + num + " was a " + attempt);
    });

---
### `_.wrap(function, wrapper)`

Wraps the first function inside of the wrapper function, passing it as the first argument. This allows the wrapper to execute code before and after the function runs, adjust the arguments, and execute it conditionally.

    .runnable globals='_'
    var hello = function(name) { return "hello: " + name; };

    hello = _.wrap(hello, function(func) {
      return "before, " + func("moe") + ", after";
    });

    console.log(hello());
	
---
### `_.compose(functions)`

Returns the composition of a list of functions, where each function consumes the return value of the function that follows.

    .runnable globals='_' highlight="compose"
    var greet    = function(name){ return "hi: " + name; };
    var exclaim  = function(statement){ return statement + "!"; };

    var welcome = _.compose(exclaim, greet);

    console.log(welcome('moe'));
