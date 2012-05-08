# RequireJS And Backbone
---

### We've Put Together A Simple Blog Application
  - You can take a look at the source at <h3 class='center'>http://github.com/javascriptu/backbone-blog</h3>
  - We've implemented this App using RequireJS, Backbone, Underscore, jQuery, And Twitter Bootstrap
  - These are the frameworks that help assemble many of our applications
  - Feel free to extend it and make it better suit your needs

---
## Remember RequireJS?
  - Our friendly module loader
  - ~ 16kb  (non-gzipped) - v1.0.8
  - Nested Dependency Management
  - Server side build support
  - All of your code is written in self-contained modules.
  - Modules / Scripts are loaded Asynchronously which helps with load times in a non-blocking manner, most of the time

<h3 class='slide center noli'> Plain and Simple, It makes your life easier.</h3>

---
# The Application
---

---
### Where do we begin

  - Well The First Part Of Any Require App you need to include your Require Script
    <pre><code src="require-backbone/require-include.txt"></code></pre>

  - Our Main JS File Bootstraps the Require Application
    <pre class='min'><code src="require-backbone/require-main.js"></code></pre>

---

---
### Whats Next?
  - The application Module we've defined sets up a starting point for our router
    <pre class='min'><code src="require-backbone/application-module.js"></code></pre>
  - A Backbone Router? Sweet..

---

---
### The Backbone Router
  - Backbone offers a built in solution for dynamic routing
  - For browsers which don't yet support the History API, the Router gracefully falls back and transparently translates the fragment version of the URL.
  - Our Blog Router Base (Well most of it)
  <pre class='min'><code src="require-backbone/backbone-router.js"></code></pre>
---

---
### The Blog View
  - Backbone views are used to show what your application's data models look like
  - Modularizing these views will make it easy placing them onto the application.
  - We have built our Blog view to be a generic View
  - We re-use this view on the Blog Widget (Listing of Blogs)
  - And The Individual View - Following the DRY Principle
    <img src="img/decks/backbone-require/dry-simpsons.png" style='margin-top:100px;' />

---
### The Blog View
  - I'll step through this view in pieces - Since its our Main View
  - The View Dependencies
    <pre class='min'><code src="require-backbone/require-view-dependencies.js"></code></pre>

  - The View Initialize Method
    <pre class='min'><code src="require-backbone/require-view-initialize.js"></code></pre>

---
### The Blog View

  - The View Template
  - Here we leverage Underscores Template Method
    <pre class='min'><code src="require-backbone/require-view-template.js"></code></pre>

  - The View Render Method
    <pre class='min'><code src="require-backbone/require-view-render.js"></code></pre>

  - We pass the JSON model into the template
    <pre class='min'><code><%= title %> <%= content %> <%= created %></code></pre>

---
# The Blog Model
---

### The Blog Model

  - As discussed earlier, Models are a very important piece of most any Javascript Application.
  - In our blog app we kept it simple, our model represents the concept of a blog object, housing our validation and destroy methods.
    <pre class='min'><code src="require-backbone/require-model.js"></code></pre>

---

---
# The Blog Collection
---

### All of your Blogs are belong to us
  - Our blog collection uses the browsers local storage to persist your blogs without the need of a datastore.
  - The Collection
    <pre class='min'><code src="require-backbone/require-collection.js"></code></pre>

---

---
# The Build Step
---

### Use Node To Minify & Uglify the Application
  - A nifty piece of RequireJS is its Optimizer
  - The Optimizer can be run using either Node (>= 0.4.0) or using Java (>= 1.6) with Rhino.
  - We chose the node route, of coarse, keeping it simple with an extra uglify step to obscure the code.
  - First you start with a package.json
  - So Whats ours look like?
---
### Our <strong>package.json</strong>
  <pre class='min'><code src="require-backbone/require-package.js"></code></pre>

---

### Running the Build Step
  - You need Node Installed (>= 0.4.0)
  - Navigate to the root directory of your application
  - Run this:
    <pre class='min'><code>node r.js -o app.build.js</code></pre>
  - This will create a built directory - htdocs-build which contains all the optimized code
  - Now your code is a little bit obscured and minified

---
# On To The Blog App
---
