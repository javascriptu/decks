# <img src='img/decks/node/express-logo.jpg' class="focus-border">
---
## &nbsp;
> The Express philosophy is to provide small, robust tooling for HTTP servers. Making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs.<br><br>
> Built on Connect you can use only what you need, and nothing more, applications can be as big or as small as you like, even a single file. Express does not force you to use any specific ORM or template engine
---
## Using express

Express comes with some helpers that make installing it globally worthwhile

term src='node/install-express.txt'
---
## Use express to build your app
###.center `express [appName]`
term src='node/express-create.txt'
---
## Install your dependencies
###.center `npm install`
term src='node/express-deps.txt'
---
## Start your app
###.center `node app.js`
term src='node/express-start.txt'
###.center <br>Visit your app here [127.0.0.1:3000](http://127.0.0.1:3000/)
---
## Taking a look at app.js

code src="node/express-app.js" lines='1-10'

###.center Beautifully basic start.<br>We require express and our routes,<br>then we create our server.
---
## Configuring our server

code src="node/express-app.js" lines='11-20'

###.center `configure()` allows us to separate our configuration
  You can define multiple configuration blocks to allow for dynamic
  configuration based off of environment or other settings
---
## `app.set()`

code src="node/express-app.js" lines='11-20' highlight='set'

###.center `app.set(name,[val])`
  Allows us to set application-wide settings, retrievable by omitting `value`
---
## Our views directory

code src="node/express-app.js" lines='11-20' highlight='4:*'

###.center Defaults to `cwd` + `/views`
---
## Default rendering engine

code src="node/express-app.js" lines='11-20' highlight='5:*'

###.center Jade : [jade-lang.com](http://jade-lang.com/)
  Jade is a HAML inspired, whitespace-sensitive, *fast* templating engine.

  You can use any template language you like, Jade is just default.
---
## Connect middleware

code src="node/express-app.js" lines='11-20' highlight='6:*'

###.center `bodyParser()`
  Parses the request bodies coming in, by default supports json, x-www-form-urlencoded, and form-data

  Yes, by default, express does not even parse the body or query of the incoming request. This is an example of how lightweight and configurable express is.
---
## Connect middleware

code src="node/express-app.js" lines='11-20' highlight='7:*'

###.center `methodOverride()`
  Convenience middleware that allows you to simulate `deletes` and `puts` by passing a form value named `_method`
---
## Load our router

code src="node/express-app.js" lines='11-20' highlight='8:*'

###.center `app.router`
  Specifying this in our middleware chain allows us to set the precedence of our router before or after other middleware
---
## Connect middleware

code src="node/express-app.js" lines='11-20' highlight='9:*'

###.center `static(staticDir)`
  This enables us to serve static files.

  Notice how this was set after the router being loaded. This allows us to intercept paths that would normally have led to static files being served.
---
## Environment Specific Configuration

code src="node/express-app.js" lines='22-31'

###.center Triggered by the environment var `NODE_ENV`
---
## Let's route!

code src="node/express-app.js" lines='33-36'

### Also `.post()`, `.put()`, `.del()`, `.all()`

### routes.js

code src="node/express-routes.js" lines="1-8"
---
## Bam, done!

code src="node/express-app.js" lines='36-45'

###.center Same `listen()` we've seen before

This time we're passing a callback that gets called on the `listening` event
---
## Express routing

### Express offers simplified and complex Regex routes

code src="node/express-routes-extended.js"

###.center Express offers similar routing syntax to Sinatra, Dancer, and others.
---
## Express rundown

- ### Really, really lightweight
  You pick and choose what you want in a very configurable and extensible manner
- ### Really, really powerful
  Express (and Connect) give you a relatively massive toolbox of useful middleware and helpers
- ### Your choice of templates
  Via consolidate, supports 14+ template styles from underscore to handlebars to haml
- ### Hugely extensible
  Coffeescript, Asset management and precompilation, authentication, et al






