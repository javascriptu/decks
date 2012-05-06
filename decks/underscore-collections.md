### `_.each(list, iterator, [context])`
### Alias: `forEach`

Iterates over a list of elements

    .runnable globals='_'
    _.each([1, 2, 3], function(val,index){
      console.log(index + ':' + val);
    });

    _.each({one : 1, two : 2, three : 3}, function(val, key){
      console.log(key + ':' + val);
    });
---
### `_.map(list, iterator, [context])`
### Alias: `collect`
Produces a new array of values by mapping each value in list through an iterator

    .runnable globals='_'
    var newArray = _.map([1, 2, 3], function(val){
      return val * 3;
    });

    console.log(newArray);
---
### `_.reduce(list, iterator, memo, [context])`
### Aliases: `inject, foldl`

Reduce boils down a list of values into a single value.

Memo is the initial state of the reduction, and each successive step of it should be returned by iterator.

    .runnable globals='_'
    var sum = _.reduce([1, 2, 3], function(a, b){
      return a + b;
    });

    console.log(sum);

---
### `_.reduceRight(list, iterator, memo, [context])`
### Alias: `foldr`

The right-associative version of reduce.

    .runnable globals='_'
    var list = [[0, 1], [2, 3], [4, 5]];

    var timesRun = 0;

    var flat = _.reduceRight(list, function(b, a) {
      //console.log(++timesRun);
      return b.concat(a);
    });

    console.log(flat);

How many times do you think the iterator runs? Uncomment line 6 to be sure.
---
### `_.find(list, iterator, [context])`
### Alias: `detect`

  Looks through each value in the list, returning the first one where the iterator returns true.

    .runnable globals='_'
    var firstEven = _.find([1, 2, 3, 4, 5, 6], function(num){
      return num % 2 == 0;
    });

    console.log(firstEven);
---
### `_.filter(list, iterator, [context])`
### Alias: `select`

Looks through each value in the list, returning an array of all the values where the iterator returns true.

    .runnable globals='_'
    var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){
      return num % 2 == 0;
    });

    console.log(evens);
---
### `_.reject(list, iterator, [context])`
### &nbsp;
The opposite of filter. Essentially negates a positive iterator.

    .runnable globals='_'
    var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){
      return num % 2 == 0;
    });

    console.log(odds);
---
### `_.all(list, iterator, [context])`
### Alias: `every`

  Returns true if the iterator returns true for all the values in the list.

    .runnable globals='_'
    var array = ['one', 'two', 'three'];

    var isStrings = _.all(array, function(val){
      return typeof val === 'string' ;
    });

    console.log(isStrings);

Try adding a `1` to the array
---
### `_.any(list, [iterator], [context])`
### Alias: `some`

  Returns true if the iterator returns true for anything in the list.

    .runnable globals='_'
    var array = [1, 'one', 'two', 'three'];

    var hasNumbers = _.any(array, function(val){
      return typeof val === 'number' ;
    });

    console.log(hasNumbers);
---
### `_.include(list, value)`
### Alias: `contains`

Tests whether or not `value` exists in list

    .runnable globals='_'
    var found = _.include([1, 2, 3], 3);

    console.log(found)

Try setting the value to `4`
---
### `_.invoke(list, methodName, [*arguments])`
### &nbsp;

Calls `methodName` on each value in the list.


    .runnable globals='_'
    var newArray = _.invoke([[1, 2, 3], [4, 5, 6]], 'pop');

    console.log(newArray);
---
### `_.pluck(list, propertyName)`
### &nbsp;

Returns a list of property values.

    .runnable globals='_'
    var stooges = [
      {name : 'moe', age : 40},
      {name : 'larry', age : 50},
      {name : 'curly', age : 60}
    ];
    var names = _.pluck(stooges, 'name');

    console.log(names);
---
### `_.max(list, [iterator], [context])`
### &nbsp;

Returns the maximum value in a list.

    .runnable globals='_'
    var numbers = [1,2,3,4];
    var maxNum = _.max(numbers);

    console.log(maxNum);

    var stooges = [
      {name : 'moe', age : 40},
      {name : 'larry', age : 50},
      {name : 'curly', age : 60}
    ];

    var oldestStooge = _.max(stooges, function(stooge){
      return stooge.age;
    });

    console.log(oldestStooge);
---
### `_.min(list, [iterator], [context])`
### &nbsp;

Returns the minimum value in a list.

    .runnable globals='_'
    var numbers = [1,2,3,4];
    var minNum = _.min(numbers);

    console.log(minNum);

---
### `_.sortBy(list, iterator, [context])`
### &nbsp;

  Returns a sorted clone of list. The iterator is either the function that produces the criteria to sort or a property name (string);

    .runnable globals='_'
    var movies = [
      { name : "Back To The Future", rel : 1985 },
      { name : "Indiana Jones",      rel : 1981 },
      { name : "ET",                 rel : 1982 },
    ]

    var byDate = _.sortBy(movies, 'rel');

    var byTitleLength = _.sortBy(movies, function(val) {
      return val.name.length;
    });

    console.log(_.pluck(byDate,'name'));
    console.log(_.pluck(byTitleLength,'name'));
---
### `_.groupBy(list, iterator)`
### &nbsp;

Splits a collection into sets. Iterator can be a string.

    .runnable globals='_'
    var movies = [
      { name : "Back To The Future", rel : 1985 },
      { name : "Brazil",             rel : 1985 },
      { name : "ET",                 rel : 1982 },
    ]

    var byRelease = _.groupBy(movies, 'rel');

    console.log(byRelease['1982']);
    console.log(byRelease['1985']);
---
### `_.shuffle(list)`
### &nbsp;


Returns a shuffled clone of the list.

    .runnable globals='_'
    var numbers = [1, 2, 3, 4, 5, 6];

    console.log(_.shuffle(numbers));

Run multiple times!
---

