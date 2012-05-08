render : function () {
  //If Single View Remove Grid Class
  if (this.single) this.el.className = 'single';
  $(this.el).html(this.template(this.model.toJSON()));
  return this;
}
