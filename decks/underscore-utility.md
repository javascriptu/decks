# Underscore<br />Utility

---
### `_.noConflict()`

Gives control of the "_" variable to its previous owner. Returns a reference to the underscore object.

    var underscore = _.noConflict();
	
---
### `_.identity(value)`

Returns the same value that is used as the argument. Useful mostly as a default iterator.

    .runnable globals='_'
    var moe = {name: 'moe'};
    console.log(_.identity(moe) === moe);
	
---
### `_.times(value)`

Invokes a given iterator `n` times.

    .runnable globals='_'
    _(3).times(function() { console.log("Hello World!"); });
	
---
### `_.mixin(object)`

Allows you to extend Underscore with your own utility functions.

    .runnable globals='_'
    _.mixin({
      capitalize: function(string) {
        return string.charAt(0).toUpperCase() +
               string.substring(1).toLowerCase();
      }
    });

    console.log(_("moe").capitalize());
	
---
### `_.uniqueId([prefix])`

Generate a globally-unique id for client-side models or DOM elements that need one. If prefix is passed, the id will be appended to it. Without prefix, returns an integer.

    .runnable globals='_'
    var uid = _.uniqueId('contact');

    console.log(uid);

Run multiple times! Change the string!

---
### `_.result(object, property)`

If the value of the named property is a function then invoke it; otherwise, return it.

    .runnable globals='_'
    var object = {
      cheese: 'crumpets',
      stuff: function(){
        return 'nonsense';
      }
    };

    console.log(_.result(object, 'cheese'));
    console.log(_.result(object, 'stuff'));
	
---
### `_.template(string, [data], [settings])`

- Compiles JavaScript templates into functions that can be evaluated for rendering.
- Useful for rendering complicated HTML from JSON data sources.
- function can both interpolate variables using <%= ... %> and execute arbitrary code <% %>.
- If the template is a one off you can pass data in the second parameter so a rendered template will be returned instead of a function.
- The third parameter should contain a hash with any template settings that should be overwritten.

---
### `_.template(string, [data], [settings])`

### Using `interpolate` to override erb-style delimiters

    .runnable globals='_'
    _.templateSettings = {
      interpolate : /\{\{(.+?)\}\}/g
    };

    var templateString = "Hello {{ name }}!";

    var templateFn = _.template(templateString);

    var templateData = {name : "Mustache"};

    console.log(templateFn(templateData));
	
---
### `_.template(string, [data], [settings])`

- By default template places variables from data in the local scope.
	- You can specify a single variable name with the variable setting.
 	- This can improve the speed at which the templates are being rendered.
- You can precompile your templates as well.
	- Precompiling the templates  will help you debug issues easily.
	- It provides line numbers and a stack trace which is not possible when compiling templates on the client.
