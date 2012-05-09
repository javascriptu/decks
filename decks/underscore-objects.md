# Underscore <br />Objects

---
### `_.keys(object)`

Retrieves all the names of an objects properties.

    .runnable globals='_'
    var keys = _.keys({one: 1, two: 2, three: 3});

    console.log(keys);
	
---
### `_.values(object)`

Retrieves all the values of an object.

    .runnable globals='_'
    var values = _.values({one: 1, two: 2, three: 3});

    console.log(values);
	
---
### `_.functions(object)`
### Alias `methods`

Returns a sorted list of the names of every method in an object — that is to say, the name of every function property of the object.

    .runnable globals='_'

    console.log(_.functions(_));
	
---
### `_.extend(destination, sources...)`

Copy all of the properties in the source objects over to the destination object, mutates the destination object.

    .runnable globals='_'
    var extend = _.extend({name: 'moe'}, {age: 50});

    console.log(extend);

The last sources will override properties of the same name in previous arguments.

---
### `_.pick(object, keys)`

Selects the keys you want from object and returns a new hash with just those properties

    .runnable globals='_'
    var pick = _.pick({name: 'moe', age: 50}, 'name');

    console.log(pick);

---	
### `_.defaults(object, defaults)`

Assign default values to assign to missing properties on `object`.

	.runnable globals='_'
	var iceCream = {flavor: "chocolate"},
		  defaults = {flavor: "vanilla", sprinkles: "lots"};
		
	console.log(_.defaults(iceCream, defaults));
	
---
### `_.clone(object)`

Create a shallow-copied clone of the object. Any nested objects or arrays will be copied by reference, **not duplicated**.

	.runnable globals='_'
	var obj = {name: 'moe'};

	console.log(_.clone(obj));

---
### `_.tap(object, interceptor)`

"Taps into" a method chain, in order to perform operations on intermediate results within the chain.

	.runnable globals='_'
	_.chain([1,2,3,200])
	  .filter(function(num) { return num % 2 == 0; })
	  .tap(console.log)
	  .map(function(num) { return num * num })
	  .tap(console.log)
	  .value();

---
### `_.has(object, key)`

Does the object contain the given key? Identical to object.hasOwnProperty(key), but uses a safe reference to the hasOwnProperty function, in case it's been overridden.

	.runnable globals='_'
	var has = _.has({a: 1, b: 2, c: 3}, "b");
	
	console.log(has);
	
---
### `_.is*`

Underscore provides several functions for determining if an object is of a certain type or meets a set of criteria. All of these functions return true or false (boolean) values.

	.runnable globals='_'
	console.log(_.isEmpty(""));
	console.log(_.isObject(1));
	
####.slide isEmpty, isElement, isArray, isObject, isArguments, isFunction, isString, isNumber, isFinite, isBoolean, isDate, isRegExp, isNaN, isNull, isUndefined.
