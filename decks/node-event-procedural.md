# Node's Evented Nature
---

### Event Based Development
- Familiar with php, perl or other Procedural languages?
- Those languages are considered `blocking` languages
- Most are used to their Procedural Paradigm
- So what's this Event Driven Paradigm all about?
- @todo Insert The Graphics For Blocking / Non-Blocking Analogy
---

### Whats a callback and why do I care?
<ul>
  <li> This is nothing new to Javascript developers.</li>
  <li> Callbacks are the asynchronous equivalent of a function.</li>
  <li> They are called once the operation is finished.</li>
  <li> Any asynchronous function in node accepts a callback as it's last parameter.</li>
  <li> What does that mean?</li>
</ul>
---

### Lets play with the file system
- first create a foo.txt and a bar.txt in the root of your project
<pre class='term slide'><code src='node/node-config.txt'></code></pre>
- create node-fs.js how ever you like
<h3 class='slide center'>Now open node-fs.js with your favorite editor</h3>
---

### Playing with the file system
- Now that we have an executable file and a package.json we can start hacking
<pre class='slide medium'><code class='code' src='node/require-fs.txt'></code></pre>
- Now Lets Build the file object
<pre class='slide medium'><code class='code' src='node/require-fs-file.txt'></code></pre>
<pre class='slide medium'><code class='code' src='node/require-fs-get.txt'></code></pre>
---

### The File in its entirety
<pre class='slide medium'><code class='code' src='node/require-fs-entire.txt'></code></pre>

###.slide Lets Run It
<pre class='term slide'><code>$ node node-fs.js</code></pre>
---

### What Happened?
<pre class='term slide'><code src='node/fs-result.txt'></code></pre>
- That fs.readFile could take a while and doesn't want to `block` other requests
- This is the Non-blocking / Callback Nature of Node
- The Console Log After the fs.readLine was fired
- Then the Callback was fired when the readFile was complete
- It may take a bit to get used to this new paradigm.
---