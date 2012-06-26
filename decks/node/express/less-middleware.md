# Integrating lesscss<br>with express
---
# <img src="img/workshop/1/lesscss.jpg" class="focus-border">
---
## Let's start with Twitter's bootstrap
###.center Cloning from github
term src='term/clone-bootstrap.txt'
---
## Move the source to our app
###.center Rename `stylesheets` to `css`
(your preference, it helps the slides)
term src='term/express-bootstrap.txt' lines="1"
###.center Make sure you are in your express app's base directory
term src='term/express-bootstrap.txt' lines="2"
###.center List the directory to examine the source
term src='term/express-bootstrap.txt' lines="3"
---
## `views/layout.jade`
### Add bootstrap to the layout
code src='node/auth-workshop/step2/views/layout.jade' highlight="5:*" lines='1-6'
### We reference the .css version to indicate we want the compiled version
---
## `views/layout.jade`
### Add a bootstrap navbar to the layout
code src='node/auth-workshop/step2/views/layout.jade'
###.slide The `!=` on line 12 indicates we want to include the unescaped value of `body` in the element `div#main`
---
## `package.json`
### Add `less-middleware`
code src='node/auth-workshop/step2/package.json' highlight='8:*'

`less-middleware` is our express-compatible library that allows us to easily intercept less files and precompile them.
term src='term/npm-install.txt'
---
## `app.js`
### Require `less-middleware` in our app.js
code src='node/auth-workshop/step2/app.js' highlight='7:*' lines='1-9'
---
## `app.js`
### Require `less-middleware` in our app.js
code src='node/auth-workshop/step2/app.js' highlight='7:*' lines='14-22'
Notice the order, lessMiddleware *before* our static handler
---
## Start your app!
term src='term/start-express-app.txt'
###.center [127.0.0.1:3000](http://127.0.0.1:3000/)
---
# <img src="img/decks/node/express-bootstrapped.jpg" class="focus-border">
---
# Congratulations!
---
## Confirm with your own dev tools
<img src="img/decks/node/express-bootstrapped-proof.jpg" class="focus-border">
---




