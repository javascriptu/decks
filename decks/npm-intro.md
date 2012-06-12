<h1><img src='img/decks/node/npm.png' /></h1>
---

### NPM
  - Two words. Dependency Management
  - Many people have built useful modules for Node, how do we leverage them?
  - Think RubyGems, apt-get, brew
  - It's pretty much the dominant Packaging System For Node
  - Useful Commands : npm help, npm install, npm ls, npm update, npm publish
  - Read the docs - http://npmjs.org/doc/
  * If You haven't installed it yet try - https://gist.github.com/579814
---

### How's it work?
  - Node makes loading dependencies easy
  - Node.js follows the CommonJS module pattern with built in require function
  - Installing these 'packages' is also quite simple
  - package.json will be your friend
  - This tells npm how your package is structured, and how to install its dependencies.
  - npm install, npm install --production
---

### package.json
- Create a package.json file in the root of your project
- There are plenty of options when writing the package file
- Check out an annotated package.json at http://package.json.nodejitsu.com/
<h3 class='center slide'> Lets put ours together now </h3>
---

### package.json
The Project's Name
<pre><code src="node/package-name.json" class="code" runnable='false' highlight='"name"'></code></pre>
---

### package.json
The Project's Current Version
<pre><code src="node/package-version.json" class="code" runnable='false' highlight='"version"'></code></pre>
---

### package.json
The Project's Author
<pre><code src="node/package-author.json" class="code" runnable='false' highlight='"author"'></code></pre>
---

### package.json
The Project's Description
<pre><code src="node/package-desc.json" class="code" runnable='false' highlight='"description"'></code></pre>
---

### package.json
The Project's Dependencies
<pre><code src="node/package-dependencies.json" class="code" runnable='false' highlight='"dependencies"'></code></pre>
---

### package.json
The Project's License
<pre><code src="node/package-license.json" class="code" runnable='false' highlight='"license"'></code></pre>
---

### Lets Run Our Final Package.json
Our Completed package.json
<pre class='medium'><code src="node/package.json" class="code" runnable='false'></code></pre>
term.slide src='node/npm-install.txt'
---

### Is it installed?
- Result of running `npm install`
<pre class='term slide'><code src='node/npm-install-result.txt'></code></pre>

###.slide Lets Check
<pre class='term slide'><code src='node/require-underscore.txt'></code></pre>
<h2 class='slide center'> What can we do with this?</h2>
---

### INSERT EXAMPLE HERE
- cat program is a standard Unix utility that concatenates and lists files.
- lets build a quick implementation of this using node and underscore
- Start out by creating node-cat.js and open it with your favorite editor
