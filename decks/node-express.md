<h1>
  <img src="img/decks/node/express-logo.png" />
  <p>High performance, high class web development for Node.js</p>
  <p>Fast, unopinionated, minimalist web framework</p>
</h1>
---

### All in one Node Framework
- "The Express philosophy is to provide small, robust tooling for HTTP servers. Making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs." -expressJS
- Express:
  - Robust routing
  - Dynamic view helpers
  - View system supporting 14+ template engines
  - Environment based configuration
  - Built on Connect
---

### Its Simple to get a server up and running
code.slide src="node/express-init.txt"

- Create the server
- listen for /index calls
- listen on port 4000
---

### Extending the base
- Extending the base http server is easy with Middleware via Connect

- Add Logging Support is as easy as
<code class='slide'> app.use(express.logger()); </code>

- Add Body Parser Support <code class='slide'> app.use(express.bodyParser());</code>
- The bodyParser middleware helps parse application/x-www-form-urlencoded and application/json request bodies and place them in req.body for us.

- Add static server support<br/>
<code class='slide'>app.use(express.static(__dirname + '/public'));</code>
- Add Error Handler support<br/>
<code class='slide'>this.use(express.errorHandler());</code>
- The errorHandler responds with json if Accept: application/json is present, which is useful for building apps that rely heavily on client-side JavaScript.
---

### With New Configure Block
- Adding in the configure block
code.slide src="node/express-configure.txt"
- Now we are pretty much ready to get coding.
---
