# Setting up our routes
---
## Basic routing
### All requests are handled by the same basic function style
### `function myRequest(req,res,next) {}`
- ### `req` : Our request object
  Contains relevant info about our request. Parameters, environments, cookies, etc.
- ### `res` : Our response object
  Used to set up and send our response.
- ### `next` : The next matched request handler in our stack
  If we want the request to fall through, call `next()`. If we don't, don't.
---
## `routes/index.js`
code src='node/auth-workshop/step4/routes/index-midpoint.js' lines='1-6'
### Our landing page

Notice how we are ignoring the third argument, `next`

We don't want routes like this to fall through. When we hit the index, we're done.
---
## `routes/index.js`
code src='node/auth-workshop/step4/routes/index-midpoint.js' lines='7-14'
### We know we'll need a post action on login (and register)

We export an object in this case so that we can group login related logic together
---
## `routes/index.js`
code src='node/auth-workshop/step4/routes/index-midpoint.js' lines='15-18'
### Just a redirect for now.

Destroying our session will come later.
---
## `routes/index.js`
code src='node/auth-workshop/step4/routes/index-midpoint.js' lines='19-26'
### Our registration landing page

We export an object, again, because we know we'll need to manage a post action later.
---
## `routes/index.js`
code src='node/auth-workshop/step4/routes/index-midpoint.js' lines='27-32'
### This is our authenticated landing page.

Notice how we're not handling authentication here. That should always happen before we get to our route.
---
## `views/layout.jade`
code src='node/auth-workshop/step4/views/layout.jade' lines='8-22' highlight='5:*,6:*,7:*,8:*,9:*,10:*,11:*,12:*,13:*'
### Add links to our navbar so that we can navigate our site.
---
## `views/partials/login.jade`
code src='node/auth-workshop/step4/views/partials/login.jade'
### Partials are just normal jade templates but are designed to be reused

When partials are included they are parsed directly into the parent's AST so the variable context is the same throughout.
---
## `views/index.jade`
code src='node/auth-workshop/step4/views/index.jade'
### This is our index template

A simple login box and a registration link that gets placed into our layout.
---
## `views/login.jade`
code src='node/auth-workshop/step4/views/login.jade'
### Behold the beauty of partials!
---
## `views/home.jade`
code src='node/auth-workshop/step4/views/home.jade'
### This is our landing page for authenticated users.

Notice the trailing `.` (dot) after the `p` indicating a text block
---
## `app.js`
code src='node/auth-workshop/step4/app.js' lines='66-78'
###.center Authentication as middleware
---
## `app.js`
code src='node/auth-workshop/step4/app.js' lines='78-92'
###.center Register all of our routes
