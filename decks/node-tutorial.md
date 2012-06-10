# Writing real apps
---
# Fire up your<br>text editor
---
# Open up your<br>terminal
---
## `helloworld.js`
code src="node/file-helloworld.js" lines="3"
###.slide Wait a second...
###.slide We're not barbarians
---
## `helloworld.js`
code src="node/file-helloworld.js"
---
## Run your script
term src="node/run-helloworld.txt"
###.slide Pretty basic, right?
###.slide Your script starts, prints, and exits
---
## Wayward code
code src="node/file-helloworld-delayed.js"
---
## Run your script
term src="node/run-helloworld-delayed.txt"
###.slide Your event loop is handled for you
###.slide If code is waiting to be run, node stays around
---
## Using core APIs

###.center Remember when we said HTTP was a first class citizen?

### &nbsp;

###.center Let's write a web server in 10 lines of code.
---
## `server.js`
code src="node/http-server-1.js"
###.center Import the core HTTP library
---
## `server.js`
code src="node/http-server-1.js" highlight='require'

###.center `require()` is your key to the outside world
<p class="center">
  All external code is exported as simple JavaScript objects<br>
  assignable just as any other variable
</p>
---
## `server.js`
code src="node/http-server-2.js"

###.center `http.createServer()`
<p class="center">
  Create a web server with a callback assigned to the <code>request</code> event.
</p>
---
## `server.js`
code src="node/http-server-2.js" highlight='3:req,3:res'

###.center `req` & `res`
<p class="center">
  With every request, we have access to both the request object coming in<br>
  and the response object going out
</p>
---
## `server.js`
code src="node/http-server-3.js" highlight=''

###.center Returning something useful
<p class="center">
  Manipulate the response object in order to present<br>
  information back to the client
</p>
---
## `server.js`
code src="node/http-server-3.js" highlight='writeHead'

###.center `writeHead(code, [msg], [headers])`
<p class="center">
  Set up our response with a status code of 200 (OK) and response headers that tell the client to treat
  our data as plain text vs anything else like :<br>
  HTML (<code>text/html</code>), an image (eg <code>image/jpeg</code>) or even audio (eg <code>audio/mpeg</code>)
</p>
---
## `server.js`
code src="node/http-server-3.js" highlight='end'

###.center `end([data], [encoding])`
<p class="center">
  End our response and initiate the send with <code>end()</code>.
</p>
---
## `server.js`
code src="node/http-helloworld.js" highlight="listen"

###.center `listen([port],[hostname])`
<p class="center">
  Attach our server to a port and a hostname/IP.
</p>
---
## Run our beautiful new server

term src="node/run-http-helloworld.txt"
###.center visit [http://127.0.0.1:3000/](http://127.0.0.1:3000/)
---
# What next?
---
### Choose a framework
   Unless we have very specific needs (and know what we're doing), we should always investigate existing web frameworks.

- ### Express - [expressjs.org](http://expressjs.org)
  Inspired by Sinatra, lightweight but very extensible web framework
- ### Geddy - [geddyjs.org](http://geddyjs.org)
  Similar to the spirit of rails, focusing on RESTful apis
- ### Flatiron - [flatironjs.org](http://flatironjs.org)
  Full-stack framework that answers some questions for you
- ### Derby - [derbyjs.com](http://derbyjs.com/)
  A post-modern web stack. Focuses on blurring the line between server and client
