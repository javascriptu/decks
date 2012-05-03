Backbone.Marionette<br>(a teaser)
==============================
<script src="scripts/underscore.js"></script>
<script src="scripts/backbone-min.js"></script>
<script src="scripts/backbone.marionette.min.js"></script>
<div id="social">
  <div id="shareme" data-url="http://bit.ly/sdjs-mar" data-title="Backbone Marionette Teaser" data-text="Check out these slides on #backbone marionette from @sandiegojs"></div>
</div>
---
# Follow Along<br>[bit.ly/sdjs-mar]()
---

## Backbone.Marionette
> Backbone.Marionette is a composite application library for Backbone.js
> that aims to simplify the construction of large scale JavaScript applications.
> <cite>Derick Bailey</cite>

- ### 8.6k (min)
- ### Small enough to use just what you need
- ### A series of conventions on top of Backbone

---
## `Marionette.Application()`

    var app = new Backbone.Marionette.Application();

---
## Regions

    .runnable highlight='Backbone.Marionette'
    var app = new Backbone.Marionette.Application();

    app.addRegions({
      mainRegion: "#example"
    });

---
## Setting up our model

    .runnable
    var Toy = Backbone.Model.extend({
    });

---
## Setting up our collection

    .runnable globals="Backbone,$,_"
    var Toy = Backbone.Model.extend({
    });

    var ToyList = Backbone.Collection.extend({
      model : Toy
    });

### Try adding :
    var list = new ToyList();
    list.add({name : 'Lincoln Logs'});
    console.log(list.at(0).get('name'));

---
## Quick base template

code src="marionette/template.html" highlight='"template"'

---
## Our item template

code src="marionette/itemTemplate.html" highlight='"item-template"'

---
## Our ItemView

    ToyView = Backbone.Marionette.ItemView.extend({
      template: "#item-template",
      tagName: 'li',
      events : {
        'click' : 'onClick'
      },
      onClick : function() {
        console.log(this.model.get('name') + ' was clicked!');
      }
    });
---
## Our CompositeView

    ToyListView = Backbone.Marionette.CompositeView.extend({
      tagName: "div",
      template: "#template",
      itemView: ToyView,
      appendHtml: function(collectionView, itemView){
        collectionView.$("ol").append(itemView.el);
      }
    });
---
## Add our initializers

    app.addInitializer(function(options){

      var view = new ToyListView({
        collection: options.collection
      });

      app.mainRegion.show(view);

    });
---
## Start it up!

<script type="codemirror" data-selector="#code4" src='code/backbone/marionette/appSetup.js'>
    var app = new Backbone.Marionette.Application();

    app.addRegions({
      mainRegion: "#example"
    });

    var Toy = Backbone.Model.extend({
    });

    var ToyList = Backbone.Collection.extend({
      model : Toy
    })
    ToyView = Backbone.Marionette.ItemView.extend({
      events : {
        'click' : 'onClick'
      },
      template: "#item-template",
      tagName: 'li',
      onClick : function() {
        console.log(this.model.get('name') + ' was clicked!');
      }
    });
    ToyListView = Backbone.Marionette.CompositeView.extend({
      tagName: "div",
      template: "#template",
      itemView: ToyView,
      appendHtml: function(collectionView, itemView){
        collectionView.$("ol").append(itemView.el);
      }
    });
  app.addInitializer(function(options){
    var view = new ToyListView({
      collection: options.collection
    });
    app.mainRegion.show(view);
  });
</script>

code#code4 globals="Backbone,$,_" runnable='true' src='marionette/appStart.js'

<style>
  #example {
    width:50%;
    margin:0 auto;
    color:black;
  }
  #example p {
    margin:0;
    padding:0;
    cursor:pointer;
  }
  #example li {
    padding:0;
    margin:0;
    background-color:  #CCC;
    border-radius: 25px;
    margin: 5px;
    line-height: 50px;
    height: 50px;
    list-style-type:none;
  }
  #example li:hover {
    background-color:  #eee;
  }
  #example ol {
    padding:0;
    margin:0;
  }
</style>
<div id="example">
<h2><code>#example</code> div here</h2>
</div>
---
### (psst, back it up, what's backbone?)
###.center Play with me!

    .runnable globals="$,Backbone,_"
    // Set up a model
    var MyModel = Backbone.Model.extend({});
    var model = new MyModel();

    // Listen for changes
    model.on('change', function(model, options){
      console.log('I changed!');
      console.log(model,options);
    });

    // Initiate a change
    model.set('foo','bar');




