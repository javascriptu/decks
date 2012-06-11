<h1><img src='img/decks/node/npm.png' /></h1>
---

### NPM
  - Two words. Dependency Management
  - Many people have built useful modules for Node, how do we leverage them?
  - Think RubyGems, apt-get, brew
  - It's pretty much the dominant Packaging System For Node
  - Useful Commands : npm help, npm install, npm ls, npm update, npm publish
  - Read the docs - http://npmjs.org/doc/
  * If You haven't installed it yet try - https://gist.github.com/579814 *
---

### How's it work?
  - Node makes loading dependencies easy
  - Node.js follows the CommonJS module pattern with a built in require function (familiar?)
  - Installing these 'packages' is also quite simple
  - package.json will be your friend
  - create a package.json file in the root of your project
  - This tells npm how your package is structured, and how to install its dependencies.
  - npm install, npm install --production
---

### package.json
Looks a little like this
<pre class='medium'><code src="node/package.json" class="code" runnable='false' globals=''></code></pre>
---

### Try it out
  - create the package.json
    <pre class='medium'><code src="node/package_short.json" class="code" runnable='false' globals=''></code></pre>
term.slide src='node/npm-install.txt'

---
### Is it installed?
<pre class='term slide'><code src='node/npm-install-result.txt'></code></pre>
###.slide Lets Check
<pre class='term slide'><code src='node/require-express.txt'></code></pre>
<h2 class='slide center'> What's Express?</h2>
---
