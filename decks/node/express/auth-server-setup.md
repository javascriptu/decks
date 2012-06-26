# Setting up our routes
---
## `routes/index.js`
code src='node/auth-workshop/step4/routes/index-midpoint.js' lines='1-6'
---
## `routes/index.js`
code src='node/auth-workshop/step4/routes/index-midpoint.js' lines='7-14'
We know we'll need a post action on login (and register), so we export an object in this case
---
## `routes/index.js`
code src='node/auth-workshop/step4/routes/index-midpoint.js' lines='15-18'
---
## `routes/index.js`
code src='node/auth-workshop/step4/routes/index-midpoint.js' lines='19-26'
---
## `routes/index.js`
code src='node/auth-workshop/step4/routes/index-midpoint.js' lines='27-32'
---
## `routes/index.js`
code src='node/auth-workshop/step4/routes/index-midpoint.js' lines='33-39'
---
## `views/layout.jade`
code src='node/auth-workshop/step4/views/layout.jade' lines='8-22' highlight='5:*,6:*,7:*,8:*,9:*,10:*,11:*,12:*,13:*'
---
## `views/partials/login.jade`
code src='node/auth-workshop/step4/views/partials/login.jade'
Partials are just normal jade templates but are designed to be reused
---
## `views/index.jade`
code src='node/auth-workshop/step4/views/index.jade'
### This is our index page, a simple login box and a registration link
---
## `views/login.jade`
code src='node/auth-workshop/step4/views/login.jade'
Behold the beauty of partials
---
## `views/home.jade`
code src='node/auth-workshop/step4/views/home.jade'
This is our landing page for authenticated users.

Notice the trailing `.` (dot) after the `p` indicating a text block
---
## `app.js`
###.center Authentication as middleware
code src='node/auth-workshop/step4/app.js' lines='66-78'
---
## `app.js`
###.center Register all of our routes
code src='node/auth-workshop/step4/app.js' lines='78-92'
