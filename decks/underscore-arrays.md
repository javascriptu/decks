# Underscore <br />Arrays
---

### `_.first(array, [n])`
### Alias `head`

Returns the first element in an array. Passing `n` will return the first n elements of the array.

	.runnable globals='_'
	var first = _.first([5, 4, 3, 2, 1]);
	
	console.log(first);
	
---

### `_.initial(array, [n])`

Returns everything but the last entry of the array. Pass `n` to exclude the last n elements from the result.

	.runnable globals='_'
	var initial = _.initial([5,4,3,2,1]);
	
	console.log(initial);
	
---
### `_.last(array, [n])`

Returns the last element of an array.

	.runnable globals='_'
	var last = _.last([5,4,3,2,1]);
	
	console.log(last);
	
---
### `_.rest(array, index)`
### Alias `tall`

Returns the rest of the elements in an array. If `index` is passed will return elements from that point forward.

	.runnable globals='_'
	var rest = _.rest([5,4,3,2,1]);
	
	console.log(rest);
	
---
### `_.compact(array)`

Returns an array with all the falsy values removed, (eg. false, null, 0, "", undefined, NaN).

	.runnable globals='_'
	var compact = _.compact([0, 1, 2, false, '', 3]);
	
	console.log(compact);
	
### `_.flatten(array, [shallow])`

Flattens a nested array of any depth. Passing shallow will only flatten a single level.

	.runnable globals='_'
	var flatten = _.flatten([1, [2], [3], 4]);
	
	console.log(flatten);
	
---
### `_.without(array, [values])`

Returns a copy of the array with the values removed.

	.runnable globals='_'
	var without = _.without([1,2,3,4,5], 2, 4);
	
	console.log(without);
	
---
### `_.union(array, array...)`

Computes the union of the past-in arrays; the list of unique items, in order, that are present in one or more arrays.

	.runnable globals='_'
	var union = _.union([1,2,3], [10, 20, 30], [2, 1]);
	
	console.log(union);
	
---
### `_.intersection(array, array...)`

Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays.

	.runnable globals='_'
	var intersection = _.intersection([1,2,3], [10, 2, 30], [2, 1]);
	
	console.log(intersection);
	
---
### `_.difference(array, array...)`

Similar to without, but returns the values from array that are not present in the other arrays.

	.runnable globals='_'
	var difference = _.difference([1,2,3,4], [5, 2, 10, 3]);
	
	console.log(difference);
	
---
### `_.uniq(array, [isSorted], [iterator])`
### Alias `unique`

Produces a duplicate-free version of the array. If you know the array is already sorted pass the isSorted argument for a faster search. If you want to compute unique items based on a transformation, pass an iterator function.

	.runnable globals='_'
	var uniq = _.uniq([1, 2, 3, 4, 1, 2, 3]);
	
	console.log(uniq);
	
---
### `_.zip(array...)`

Merges together the values of each of the arrays with the values at the corresponding position. 

	.runnable globals='_'
	var zip = _.zip(['larry','moe','curly'], [10, 20, 30], [true, false, true]);
	
	console.log(zip);
	
---
### `_.indexOf(array, value, [isSorted])`

Returns the index at which value can be found in the array, or -1 if value is not present in the array.

	.runnable globals='_'
	var indxof = _.indexOf([2, 4, 6, 8], 4);
	
	console.log(indxof);
	
---
### `_.lastIndexOf(array, value, [isSorted])`

Returns the index of the last occurrence of value in the array, or -1 if value is not present.

	.runnable globals='_'
	var lstindxof = _.lastIndexOf([2, 4, 6, 8, 10, 4, 12], 4);
	
	console.log(lstindxof);
	
---
### `_.range([start], stop, [step])`

A function to create flexibly-numbered lists of integers, handy for each and map loops. start, if omitted, defaults to 0; step defaults to 1. Returns a list of integers from start to stop, incremented (or decremented) by step, exclusive.

	.runnable globals='_'
	var rng = _.range(1, 20);
	
	console.log(rng);
