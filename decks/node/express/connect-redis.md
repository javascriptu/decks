# <img src="img/workshop/1/lesscss.jpg" class="focus-border">
---
# Integrating lesscss<br>with express
---
## Let's start with Twitter's bootstrap
###.center Cloning from github
term src='term/clone-bootstrap.txt'
---
## Move the source to our app
###.center Make sure you are in your express app's base directory
term src='term/express-bootstrap.txt' lines="1"
###.center List the directory to examine the source
term src='term/express-bootstrap.txt' lines="2"
---
## Add bootstrap to our layout
### `views/layout.jade`
code src='node/express-bootstrap-app/views/layout.jade' highlight="5:*"
### We reference the .css version to indicate we want the compiled version
---
Also add a navbar
explain that != allows for unescaped html
---
## `package.json`

add less middleware
what is less middleware?
---
## `app.js`

add less middleware to configuration
---
start app!
check your dev tools to see bootstrap automatically compiled!




