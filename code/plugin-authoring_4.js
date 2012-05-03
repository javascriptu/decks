var settings = {
  url: "http://www.javascriptu.org/",
  interval: 5000, // poll every 5 seconds
  decay: 2, // poll decay on 304's
},
  options = {
    url: "/",
    x: false
};

$.extend(settings, options);

// returns
{url: "/", interval: 5000, decay: 2, x: false}
