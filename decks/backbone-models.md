## Backbone Models
<img src="img/decks/backbone-intro/zoolander.jpg" class="focus-border" style="height:80%">
---
## Models
## Why models?

### If the data you're passing around is important to your application, it deserves its own container.

###.slide Using plain hashes and arrays leave you no wiggle room.
---
## Models


    Backbone.Model.extend(properties [, classProperties]);


- ### .extend() is core to Backbone
  All we're doing is consistently extending the same base functionality
- ### `properties`
  A hash of instance (prototype) properties e.g.

  `OurModel.prototype.foo = "bar"`
- ### `classProperties`
  A hash of properties to be attached directly to the constructor function e.g.

  `OurModel.foo = "bar"`
---
## Models
### Attributes and accessors
    .runnable globals="Backbone,$,_"
    var Person = Backbone.Model.extend({
      fullName : function() {
        return this.get('firstName') + ' ' + this.get('lastName');
      }
    });

    var cartoonist = new Person();

    cartoonist.set('firstName', 'Gary');
    cartoonist.set('lastName', 'Larson');

    console.log(cartoonist.fullName());
---
## Models
### Initialization shorthand
    .runnable globals="Backbone,$,_" highlight="7:{,8.9:*,10:}"
    var Person = Backbone.Model.extend({
      fullName : function() {
        return this.get('firstName') + ' ' + this.get('lastName');
      }
    });

    var cartoonist = new Person({
      firstName : 'Bill',
      lastName : 'Watterson'
    });

    console.log(cartoonist.fullName());
---
## Models
### `initialize()`
    .runnable globals="Backbone,$,_" highlight='initialize'
    var Person = Backbone.Model.extend({
      initialize : function() {
        if (this.fullName() === 'Bill Amend') {
          console.log('Squeeee!');
        }
      },
      fullName : function() {
        return this.get('firstName') + ' ' + this.get('lastName');
      }
    });

    var cartoonist = new Person({
      firstName : 'Bill',
      lastName : 'Amend'
    });
---
## Models
### Defaults
    .runnable globals="Backbone,$,_"
    var Pet = Backbone.Model.extend({
      defaults : {
        type : 'cat',
        name : 'Astrophe'
      }
    });

    var pet = new Pet();

    console.log(pet.get('type') + ' ' + pet.get('name'));
---
## Models
### Validation
    .runnable globals="Backbone,$,_"
    var Pet = Backbone.Model.extend({
      validate : function(attrs) {
        if (attrs.type === 'rock')
          return "Nope";
      }
    });

    var pet = new Pet();
    if (pet.set('type', 'dog'))  console.log("Set Dog Success!");
    if (pet.set('type', 'rock')) console.log("Set Rock Success!");
    console.log(pet.get('type'));

### Returning anything from validate results in a failed validation.
Return nothing for success (think unix)
---
## Models
### Forced Validation
    .runnable globals="Backbone,$,_" highlight='isValid'
    var Pet = Backbone.Model.extend({
      validate : function(attrs) {
        if (attrs.type === 'rock')
          return "Nope";
      }
    });

    var pet = new Pet({ type : 'rock'});
    console.log(pet.get('type'));
    console.log(pet.isValid());

You may not know how something was created or changed so you can use isValid() when necessary
---
Events
======
---
## Events

- Subscribe to events to be notified when something happens to your model
- ### `on(event, callback [, context])`
- ### `off([event] [, callback] [, context])`
- ### `trigger(event [, *args])`
---
## Event List
- `add` (model, collection) — when a model is added to a collection.
- `remove` (model, collection) — when a model is removed from a collection.
- `reset` (collection) — when the collection's entire contents have been replaced.
- `change` (model, options) — when a model's attributes have changed.
- `change:[attribute]` (model, value, options) — when a specific attribute has been updated.
- `destroy` (model, collection) — when a model is destroyed.
- `sync` (model, collection) — triggers whenever a model has been successfully synced to the server.
- `error` (model, collection) — when a model's validation fails, or a save call fails on the server.
- `route:[name]` (router) — when one of a router's routes has matched.
- `all` — this special event fires for any triggered event, passing the event name as the first argument.
---
## Models
### Events
    .runnable globals="Backbone,$,_" highlight=''
    var Price = Backbone.Model.extend();

    var lowPrice = new Price({ amount : .50});

    lowPrice.on('change:amount', function(){
      console.log("Changing price!");
    })

    lowPrice.set('amount', 1.50);
---
## Models
### Previous Values
    .runnable globals="Backbone,$,_" highlight='previous'
    var Price = Backbone.Model.extend();

    var lowPrice = new Price({ amount : 1});

    lowPrice.on('change:amount', function(model, value){
      console.log("Changing price from $" + this.previous('amount') +
                  " to $" + this.get('amount')
      );
    })

    lowPrice.set('amount', 3);
---
## Syncing

- ### Interacting with an external data layer
  (server, cache, localStorage)
- ### `urlRoot && .url()`
  `url()` generates urls in the form `/[urlRoot]/[id]`
- ### `.save()` post | put
- ### `.fetch()` get
- ### `.destroy()` delete
- ### Each delegate to `.sync()`
---
## Synching

### You can override `.sync()`

    .runnable globals="Backbone,$,_" highlight='previous'
    var User = Backbone.Model.extend({
      sync : function(method,model) {
        console.log("Trying to perform a " + method);
      }
    });

    var user = new User();
    user.save();

Try changing the last line to

    user.set('id', '1').save();
