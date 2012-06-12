app.get('/resource/:id', function(req, res){
  res.send('resource ' + req.params.id);
});

app.get('/resource/:id?', function(){});

app.all('/users/*', function(){});

app.get(/^\/comments?(?:\/(\d+))?$/, function(){});
