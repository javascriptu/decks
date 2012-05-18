Handlebars.registerHelper("debug", function (val) {
  console.log("====================");
  console.log("Current Context");
  console.log(this);
  console.log("====================");
  if (val) {
    console.log("====================");
    console.log("Value Reference");
    console.log(val);
    console.log("====================");
  }
});
