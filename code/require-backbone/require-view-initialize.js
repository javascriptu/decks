initialize : function (options) {
  if (options.type === 'single') this.single = true;
  _.bindAll(this, 'render', 'remove');
  this.model.bind('change', this.render);
  this.model.bind('destroy', this.remove);
}
