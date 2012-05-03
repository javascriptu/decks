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
    'click' : 'alert'
  },
  template: "#item-template",
  tagName: 'li',
  alert : function() {
    console.log(this.model.get('name') + ' is the winner!');
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
