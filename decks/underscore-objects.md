# Underscore <br />Objects

---
### `_.keys(object)`

Retrieves all the names of an objects properties.

	.runnable globals='_'
	var k = _.keys({one: 1, two: 2, three: 3});
	
	console.log(k);
	
---
### `_.values(object)`

Retrieves all the values of an object.

	.runnable globals='_'
	var v = _.values({one: 1, two: 2, three: 3});
	
	console.log(v);
	
---
### `_.functions(object)`
### Alias `methods`

Returns a sorted list of the names of every method in an object — that is to say, the name of every function property of the object.

	.runnable globals='_'
	
	console.log(_.functions(_));
	
---
### `_.extend(desitnation, sources...)`

Copy all of the properties in the source objects over to the destination object, and return the destination object. It's in-order, so the last source will override properties of the same name in previous arguments.

	.runnable globals='_'
	var extend = _.extend({name: 'moe'}, {age: 50});
	
	console.log(extend);
	
---
### `_.pick(object, keys)`

Copy all of the properties in the source objects over to the destination object, and return the destination object. It's in-order, so the last source will override properties of the same name in previous arguments.

	.runnable globals='_'
	var pick = _.pick({name: 'moe', age: 50}, 'name');
	
	console.log(pick);

---	
### `_.defaults(object, defaults)`

Fill in missing properties in object with default values from the defaults objects, and return the object. As soon as the property is filled, further defaults will have no effect.

	.runnable globals='_'
	var iceCream = {flavor: "chocolate"},
		defaults = {flavor: "vanilla", sprinkles: "lots"};
		
	console.log(_.defaults(iceCream, defaults));
	
---
### `_.clone(object)`

Create a shallow-copied clone of the object. Any nested objects or arrays will be copied by reference, not duplicated.

	.runnable globals='_'
	var obj = {name: 'moe'};
	
	console.log(_.clone(obj));
	
---
### `_.tap(object, interceptor)`

Invokes interceptor with the object, and then returns object. The primary purpose of this method is to "tap into" a method chain, in order to perform operations on intermediate results within the chain.

	.runnable globals='_'
	_.chain([1,2,3,200])
	  .filter(function(num) { return num % 2 == 0; })
	  .tap(console.log)
	  .map(function(num) { return num * num })
	  .value();
	
---
### `_.has(object, key)`

Does the object contain the given key? Identical to object.hasOwnProperty(key), but uses a safe reference to the hasOwnProperty function, in case it's been overridden accidentally.

	.runnable globals='_'
	var has = _.has({a: 1, b: 2, c: 3}, "b");
	
	console.log(has);
	
---
### `_.is*`

Underscore provides several functions for determining if an object is of a certain type or meets a set of criteria. All of these functions return true or false (boolean) values.

	.runnable globals='_'
	console.log(_.isEmpty(""));
	console.log(_.isObject(1));
	
- isEmpty, isElement, isArray, isObject, isArguments, isFunction, isString, isNumber, isFinite, isBoolean, isDate, isRegExp, isNaN, isNull, isUndefined.