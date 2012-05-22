Templates as Dependencies.
=====================================
---
## RequireJS `text` Plugin

### The `text` plugin allows you to specify any arbitrary text file as a dependency

code src="templating/requirejs-dependencies.js" highlight=""
---
## RequireJS `text` Plugin

### Use `text!` followed by a url to grab any file

code src="templating/requirejs-dependencies.js" highlight="4:text."
---
## RequireJS `text` Plugin

### Your text string will be available via an argument or with require()

code src="templating/requirejs-dependencies.js" highlight="4:template.tmpl,6:templateText"
---
## RequireJS `text` Plugin

### Include your templating library to parse the string.

code src="templating/requirejs-dependencies.js" highlight="3:underscore,6:_"
---
## RequireJS `text` Plugin

### Proceed like any other day!

code src="templating/requirejs-dependencies.js" highlight="7:myTemplate"
---
## RequireJS Next Steps

- ### RequireJS is excellent, but spoils us
    It distills our code and exposes duplication
- ### Use template plugins
    You may find your templating solution is already a plugin beyond text!
- ### Write your own plugin!
    RequireJS plugin format is not difficult to grasp.
- ### Make sure you open source
    Github and BSD/MIT License is preferred
