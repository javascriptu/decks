### Event Based Development
- Familiar with php, perl or other Procedural languages?
- Those languages are considered `blocking` languages
- Most are used to their Procedural Paradigm
- So what's this Event Driven Paradigm all about?
- Fast Food Analogy
- @TODO - put analogy into slides
---

### Callbacks
- Whats a callback and why do I care?
- This is nothing new to Javascript developers.
- Callbacks are the asynchronous equivalent of a function.
- They are called once the operation is finished.
- Any asynchronous function in node accepts a callback as it's last parameter.
- What does that mean?
---

### Lets play with the file system
- first create a config.json file in the root of your project
<pre class='term slide'><code src='node/node-config.txt'></code></pre>
<pre class='term slide'><code src='node/require-fs.txt'></code></pre>
- Now lets read that file
<pre class='term slide'><code src='node/require-fs-read.txt'></code></pre>
<pre class='term slide'><code> > getConfig('config.json', processFile);</code></pre>
---

### Whats Happened?
<pre class='term slide'><code src='node/fs-result.txt'></code></pre>
- That fs.readFile could take a while and doesn't want to `block` other requests
- This is the Non-blocking / Callback Nature of Node
- The Console Log After the fs.readLine was fired
- Then the Callback was fired when the readFile was complete
- It may take a bit to get used to this new paradigm.
- The expense for the added complexity is a huge improvement in its overall concurrency.
<h2 class='slide center'> On To Node's Events</h2>
---