# Having a persistent session store
---
# What is a session?
---
## What is a session?
> A session is set up or established at a certain point in time, and torn down at a later point in time.
>
> A session is typically, but not always, stateful, meaning that at least one of the communicating parts needs to save information about the session history in order to be able to communicate

###.center Thanks, Wikipedia
####.center (ps, "[Donate](http://donate.wikimedia.org/w/index.php?title=Special:FundraiserLandingPage&country=US&uselang=en)" - Jimmy Wales' face)
<img src="img/wales-jimmy.jpg" style="position:absolute;bottom:-150px;border-radius:150px;right:-75px;-webkit-transform:rotate(-45deg)" class="focus-border">
---
# Using<br>`connect-redis`
---
## `connect-redis`
> connect-redis is a Redis session store backed by node_redis, and is insanely fast :).

- ### Written by TJ Holowaychuk
- ### We use redis because it's brilliant
- ### Does not require 100% platform buy-in to redis
  Redis is lightweight and useful to use in ad-hoc scenarios like this
---
## `package.json`
### Add `connect-redis`
code src='node/auth-workshop/step3/package.json' highlight='8:*'
term src='term/npm-install.txt'
---
## `app.js`
### Require `connect-redis` and set it up for express
code src='node/auth-workshop/step3/app.js' highlight='8:*' lines='1-9'
Don't forget the `(express)` at the end.

We start our variable with a capital to indicate it is a constructor.
---
## `app.js`
### Add `connect`'s cookie parser to our config
code src='node/auth-workshop/step3/app.js' highlight='6:*' lines='15-25'
We need the cookie parser to store and read the session id (`sid`).
---
## `app.js`
### Configure a new session with our Redis SessionStore
code src='node/auth-workshop/step3/app.js' highlight='7:*,8:*,9:*,10:*' lines='15-27'
As always, note the order.

Do we need this before lessMiddleware and the static server?
---
## `routes/index.js`
### Add a quick visits counter to our index
code src='node/auth-workshop/step3/routes/index.js' highlight='7:*'

Anything added to `req.session` will now be available on subsequent visits with that same session
---
## `views/index.jade`
### Add a quick visits counter to our index
code src='node/auth-workshop/step3/views/index.jade' highlight='7:*'

Note the pure JavaScript within the `#{}` block
---
## `app.js`
### Add a "dynamic helper" to inject the session into our template data on each render
code src='node/auth-workshop/step3/app.js' highlight='' lines='36-41'
The return of every value of the dynamicHelpers will be available in its respective key.
---
## Start our redis server
term src='term/start-redis.txt' highlight=''
---
## Start your app!
term src='term/start-express-app.txt'
###.center [127.0.0.1:3000](http://127.0.0.1:3000/)
---
# <img src="img/decks/node/session-visits.jpg" class="focus-border">
---
## Connect to redis
### Use `redis-cli` to view the session objects
term src='term/redis-keys-sessions.txt'
Assuming a fresh install of redis, the output of keys should be pretty small.

Adjust the `get` command with your key retrieved from the previous command

### Try the command `help` and experiment with your redis db
