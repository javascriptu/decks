## Backbone Collections
<img src="img/decks/backbone-intro/pogs.jpg" class="focus-border" style="height:80%">
---
## Collections
- ### Lists of stuff
  The vast majority of *everything* you build will be based around managing lists of *stuff*.
- ### It better be easy
  Your ability to manage these lists and funnel them through heavily reusable logic points is key to your success.
- ### Backbone and underscore.js
  JavaScript's<sup>*</sup> core set of array and collection functionality is pretty miserable. Underscore augments this.

<div class="slide"><sup>*</sup> The minimum base set of the ECMAScript spec implemented in the still-used IE8 and below</div>
---
## Extending the Base

    Backbone.Collection.extend(properties [, classProperties]);

- ### .extend() is core to Backbone
  All we're doing is consistently extending the same base functionality
- ### `properties`
  A hash of instance (prototype) properties e.g.

  `OurCollection.prototype.foo = "bar"`

- ### `classProperties`
  A hash of properties to be attached directly to the constructor function e.g.

  `OurCollection.foo = "bar"`
---
## Specifying our Model

### Often you'll be specifying a model on creation of your Collection Constructor

    .runnable globals="Backbone,$,_" highlight="4:model"
    var User = Backbone.Model.extend({});

    var UserList = Backbone.Collection.extend({
      model : User
    });

Not required, but adds functionality to the Collection by delegating to the Model for certain actions.

Without it, you just get an Array with extra (still awesome) sugar
---
## Adding Content

    .runnable globals="Backbone,$,_"
    var User = Backbone.Model.extend({});

    var UserList = Backbone.Collection.extend({
      model : User
    });

    var users = new UserList([
      { name : "Westley" },
      { name : "Fezzik" },
      { name : "Inigo" }
    ]);

    console.log(users.at(0).get('name'));

Specifying a model allowed us to add raw data and have our Collection automatically generate the models before adding
---
## `.create()` convenience method

<script type='codemirror'>
    var User = Backbone.Model.extend({
      sync : function(method,model) {
        console.log("Performing a " + method);
      }
    });
</script>

    .runnable globals="Backbone,$,_"
    var UserList = Backbone.Collection.extend({
      model : User
    });

    var users = new UserList();

    // cue beautiful UI that allows you to add users

    users.create({ name : 'Vizzini' });

    console.log(users.at(0).get('name'));

---
## What happened?

  - Passed raw data to Collection::create()
  - Collection passed that to our model
  - Our model was created with the passed data
  - Our model synced with server, creating the resource
  - Our model was added to our collection
  - ###  All in one line.

<h3 class="slide center"><code>collection.create()</code> then move on</h3>
---
## Events

### Collection events allow you to trigger code based off actions that occur on a list

- ### `add`
- ### `remove`
- ### `reset`
  When a collection's contents has been replaced.
- ### `destroy`
- ### `sync`
- ### `error`
  When a save fails, or a model fails validation
---
## Events

<script type="codemirror">
    var User = Backbone.Model.extend({});

    var UserList = Backbone.Collection.extend({
      model : User
    });

</script>

    .runnable globals="Backbone,$,_"
    var users = new UserList();

    users.on('add', function(model, collection, options) {
      console.log(
        'adding ' + model.get('name') +
        ' at index ' + options.index
      );
    });

    users.add({name : 'Vizzini'});
    users.add({name : 'Humperdinck'});

<h3 class="slide center">What do you think will happen<br>if we listen for a change event?</h3>
---
## Event bubbling

<script type="codemirror">
    var User = Backbone.Model.extend({});

    var UserList = Backbone.Collection.extend({
      model : User
    });

</script>

    .runnable globals="Backbone,$,_"
    var users = new UserList();

    users.on('change', function(model, options) {
      console.log("A user's name changed to " + model.get('name'));
    });

    users.add({name : 'Vizzini'});
    users.add({name : 'Humperdinck'});
    users.at(0).set('name', 'Venkman');

###.slide Well that's neat
---
## What about direct model access?

<script type="codemirror">
    var User = Backbone.Model.extend({});

    var UserList = Backbone.Collection.extend({
      model : User
    });

    var users = new UserList();

</script>

    .runnable globals="Backbone,$,_"
    users.on('change', function(model, options) {
      console.log("A user's name changed to " + model.get('name'));
    });

    var randomUser = new User({name : "Egon"});

    users.add(randomUser);

    randomUser.set('name', 'Winston');

###.slide Duh, that's no big deal.
---
## A child of multiple collections
<script type="codemirror">
    var User = Backbone.Model.extend({});

    var UserList = Backbone.Collection.extend({
      model : User
    });

</script>

    .runnable globals="Backbone,$,_"
    var pirates = new UserList();
    pirates.on('change', function(model, options) {
      console.log("A pirates's name changed to " + model.get('name'));
    });

    var farmboys = new UserList();
    farmboys.on('change', function(model, options) {
      console.log("A farmboy's name changed to " + model.get('name'));
    });

    var hero = new User({name : "Dread Pirate Roberts"});

    pirates.add(hero);
    farmboys.add(hero);

    hero.set('name', 'Westley');

---
## Simple concepts, complex execution

### &nbsp;
###.center Backbone is just a series of very simple conventions that, when fully utilised, give your application tremendous potential
### &nbsp;
<h3 class="slide center">It's no longer "OK" to pass around naked data</h3>
---
## Collections
### Other utility methods

- `get` - Gets item at `id`
- `at` - Gets item at index
- `push` - Adds item to the end
- `pop` - Removes and returns the last item
- `unshift` - Adds item to the beginning
- `shift` - Removes and returns first item
- `length` - length of the collection

---
## `.where(attributes)`

<script type="codemirror">
    var User = Backbone.Model.extend({});

    var UserList = Backbone.Collection.extend({
      model : User
    });
</script>

    .runnable globals="Backbone,$,_"
    var users = new UserList([
      { name : "Westley", type : 'Pirate' },
      { name : "Fezzik",  type : 'Giant' },
      { name : "Vizzini", type : 'Sicilian' },
      { name : "Inigo",   type : 'Swordsman' }
    ]);

    var pirates = users.where({type : 'Pirate'});

    console.log('There is ' + pirates.length + ' pirate');
---
##.center Plus a massive assortment of Underscore methods

###.center All underscore methods are native to your collection objects
---
## Collections recap

- ### Lists of *stuff*
- ### Loads more functionality than native Arrays
- ### Can manage events on individual models
- ### Triggers events on actions you'll want to know about
- ### You won't want to go back to Arrays


















