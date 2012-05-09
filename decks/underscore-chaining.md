# Underscore<br />Chaining

---
### Chaining

    _.map([1, 2, 3], function(n){ return n * 2; });
    _([1, 2, 3]).map(function(n){ return n * 2; });
	
- You can use underscore in either an object-oriented or functional style.
- The two lines above are the two different styles that will produce the same results.

---
### `_.chain(object)`

Returns a wrapped object. Calling methods on this object will continue to return wrapped objects until value is used.

    .runnable globals='_'
    var stooges = [
      {name : 'curly', age : 25},
      {name : 'moe', age : 21},
      {name : 'larry', age : 23}
    ];

    var youngest = _.chain(stooges)
      .sortBy(function(stooge ){ return stooge.age; })
      .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })
      .first()
      .value();

    console.log(youngest);

- Array prototype's methods are proxied through the chained underscore object allowing you to use methods like reverse and push.

---
### `_(obj).value()`

Extracts the value of a wrapped object.

    .runnable globals='_'
    console.log(_([1, 2, 3]).value());
