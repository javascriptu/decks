## Backbone Views
<img src="img/decks/backbone-intro/views.jpg" class="focus-border" style="height:80%">
---
## Views

- ### Very lightweight
  Locks you into little, assumes even less about your application.
- ### Depends on jQuery or Zepto
  Zepto is a lightweight, jQuery compatible framework
- ### Mostly convention and convenience
  Organizes your UI portions into logical container that contain the pieces necessary for you to be awesome
---
## Creating your view

    Backbone.View.extend(properties [, classProperties]);

- ### .extend() is (still) core to Backbone
  Extending the same base functionality
- ### `properties`
  A hash of instance (prototype) properties e.g.

  `OurView.prototype.foo = "bar"`

- ### `classProperties`
  A hash of properties to be attached directly to the constructor function e.g.

  `OurView.foo = "bar"`
---
## Special properties

- ### `id` - The id of the containing element
- ### `className` - The class(es) of the containing element
- ### `tagName` - The tag of the containing element
- ### `attributes` - Attributes on the containing element
- ### `el` - An overridden element to contain the view
- ### `events` - A hash of events attached to the parent element
---
## Another `.initialize()`

### As with Models and Collections, our `.initialize()` method gets called upon initialization

    .runnable globals="Backbone,$,_" highlight=""
    var SimpleView = Backbone.View.extend({
      initialize : function() {
        console.log(this.options);
      }
    })

    var viewInstance = new SimpleView({
      foo : 'bar'
    });

###.slide The argument passed is placed into the "options" property on your instance.
---
## Special options that bypass the options hash

- ### `model` - a Backbone.Model instance
- ### `collection` - a Backbone.Collection instance
- ### `id`
- ### `className`
- ### `tagName`
- ### `attributes`
- ### `el`
---
## `.render()`

- ### The heart of your view is render.
  By default, does nothing.
- ### Well that's pretty much it.
- ### The rest is convenience.
---
## `.el`

### The `.el` property is a reference to the view's containing element

    .runnable globals="Backbone,$,_" highlight=""
    var SimpleView = Backbone.View.extend({
      initialize : function() {
        console.log(this.el.outerHTML)
      }
    })

    var viewInstance = new SimpleView();
---
## `.el`

### The containing element is created based off of the passed or extended options

    .runnable globals="Backbone,$,_" highlight=""
    var SimpleView = Backbone.View.extend({
      tagName   : 'p',
      className : 'comment',
      id        : 'myContent',
      initialize : function() {
        console.log(this.el.outerHTML);
      }
    })

    var viewInstance = new SimpleView();
---
## `.$el`

###.center `this.$el` == `$(this.el)`

### jQuery instance of your element, for convenience

    .runnable globals="Backbone,$,_" highlight=""
    var SimpleView = Backbone.View.extend({
      tagName   : 'p',
      className : 'first',

      initialize : function() {
        this.$el.addClass('second');
        console.log(this.el.outerHTML);
      }
    })

    var viewInstance = new SimpleView();
---
## `.$([selector])`

### &nbsp;
###.center Essentially a scoped jQuery.
### &nbsp;
###.center `view.$el.find('li')` == `view.$('li')`
### &nbsp;

###.slide Encourages you to only deal with elements within your view.
---
## The `events` hash

### A list of events and callbacks

    var SimpleView = Backbone.View.extend({

      events : {
        'click'            : 'parentClicked',
        'dblclick button'  : 'childButtonClicked',
        'mouseover .stuff' : 'showTooltip'
      },

      parentClicked      : function(){},
      childButtonClicked : function(){},
      showTooltip        : function(){}
    })
---
## Something simple

    .runnable globals="Backbone,$,_" highlight=""
    var SimpleView = Backbone.View.extend({
      render : function() {
        this.$el.html('Hi world!');
      }
    })

    var view = new SimpleView({ el : '#view1' });
    view.render();

<div id="view1" style="border:1px solid red; text-align:center;width:50%;height:2em;margin:0 auto"></div>

### &nbsp;
###.slide Try passing and rendering an option
###.slide Hint : `new SimpleView( { name : "Voltron" } )`
###.slide Hint : `this.$el.html('Hi ' + this.options.name);`
---
## Using a model

<script type="codemirror">
    var User = Backbone.Model.extend({});

    var UserList = Backbone.Collection.extend({
      model : User
    });
</script>

    .runnable globals="Backbone,$,_" highlight=""
    var user = new User({ name : 'Zuul' });

    var ItemView = Backbone.View.extend({
      render : function() {
        this.$el.html('Hi ' + this.model.get('name'));
      }
    });

    var view = new ItemView({
      model : user,
      el    : '#view2'
    });

    view.render();

<div id="view2" style="border:1px solid red; text-align:center;width:50%;height:2em;margin:0 auto"></div>
---
## Using a collection (`users`)

<script type="codemirror">
    var User = Backbone.Model.extend({});

    var UserList = Backbone.Collection.extend({
      model : User
    });
    var ninjaTurtles = new UserList([
      { name : 'Leonardo' },
      { name : 'Donatello' },
      { name : 'Michelangelo' },
      { name : 'Raphael' }
    ]);
</script>

    .runnable globals="Backbone,$,_" highlight=""

    var ListView = Backbone.View.extend({
      tagName : 'ol',
      render : function() {
        this.$el.empty();
        this.collection.forEach(function(user){
          this.$el.append('<li>' + user.get('name') + '</li>');
        },this);
      }
    });

    new ListView({
      collection : ninjaTurtles,
      el         : '#view3'
    }).render();

<div id="view3" style="border:1px solid red; text-align:center;width:50%;min-height:2em;margin:0 auto"></div>
---
## Using events

<script type="codemirror">
    var User = Backbone.Model.extend({});

    var UserList = Backbone.Collection.extend({
      model : User
    });
    var ninjaTurtles = new UserList([
      { name : 'Leonardo' },
      { name : 'Donatello' },
      { name : 'Michelangelo' },
      { name : 'Raphael' }
    ]);
    var ListView = Backbone.View.extend({
      tagName : 'ol',
      render : function() {
        this.$el.empty();
        this.collection.forEach(function(user){
          this.$el.append('<li>' + user.get('name') + '</li>');
        },this);
      },
</script>

    .runnable globals="Backbone,$,_" highlight=""
    //render : function() { ... },

      events : {
        'click li' : 'onClick'
      },
      onClick : function(evt) {
        console.log(evt.target.outerHTML);
      }
    });

<script type="codemirror/cleanup">

    new ListView({
      collection : ninjaTurtles,
      el         : '#view4'
    }).render();
</script>

<div id="view4" style="border:1px solid red; text-align:center;width:50%;min-height:2em;margin:0 auto"></div>
---
## Tying it together

### Listening to events

    initialize : function() {
      this.collection.on('all', this.render, this);
    }

###.slide A cheap re-render when *anything* happens to our collection
---
## Tying it together

<script>
    var User = Backbone.Model.extend({});

    var UserList = Backbone.Collection.extend({
      model : User
    });
    var users = new UserList([
      { name : 'Turing' },
      { name : 'Babbage' },
      { name : 'Lovelace' }
    ]);
    var ListView = Backbone.View.extend({
      tagName : 'ol',
      initialize : function() {
        this.collection.on('all', this.render, this);
      },
      render : function() {
        this.$el.empty();
        this.collection.forEach(function(user){
          this.$el.append('<li>' + user.get('name') + '</li>');
        },this);
      }
    });
    var list = new ListView({
      collection : users,
      el         : '#view5'
    });

    list.render();
</script>

    .runnable globals="Backbone,$,_,users" highlight=""

    users.add({ name : 'You!' });

###.slide Try `users.pop()`
###.slide `users.unshift({name:'Gates'})`
###.slide `users.first().set('name','Torvalds')`

<div id="view5" style="border:1px solid red; text-align:center;width:50%;min-height:2em;margin:0 auto"></div>

---
## Render is up to you to decide

<script>
    var ListView2 = Backbone.View.extend({
      tagName : 'p',
      initialize : function() {
        this.collection.on('all', this.render, this);
      },
      render : function() {
        this.$el.empty();
        var h = '',c = this.collection;
        switch (c.length) {
          case 0 : h = 'No one is awesome!'; break;
          case 1 : h = c.first().get('name') + ' is awesome!'; break;
          case 2 : h = c.at(0).get('name') + ' and ' + c.at(1).get('name') + ' are awesome!'; break;
          case 3 : h = c.at(0).get('name') + ', ' + c.at(1).get('name') + ' and 1 other is awesome'; break;
          default : h = c.at(0).get('name') + ', ' + c.at(1).get('name') + ' and ' + (c.length - 2) + ' others are awesome'; break;
        }
        this.$el.html(h);
      }
    });
    var list2 = new ListView2({
      collection : users,
      el         : '#view6'
    });

    list2.render();
</script>

    .runnable globals="Backbone,$,_,users" highlight=""

    users.add({ name : 'You!' });
    //users.pop();

### Alternate the two commands a few times
### &nbsp;

<div id="view6" style="border:1px solid red; text-align:center;width:50%;min-height:2em;margin:0 auto"></div>
---
## Backbone is not magic

- ### You don't do everything "in backbone"
  Backbone is just another tool
- ### There is a cost
  You will need to find new solutions and how to recognize new patterns
- ### But it's worth it





















