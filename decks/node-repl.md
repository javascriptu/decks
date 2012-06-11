# Let's play
---
# <img src="img/decks/node/nodejs-logo.png" class="focus-border">
---
## The REPL

term src="node/repl.txt"
---
## The REPL

- `node` without arguments dumps you into a REPL, a Read, Evaluate, Print Loop
- Anything you type will be immediately executed
- à la
  - `irb`
  - `php -a`
  - perl's `Devel::REPL`
  - `python`
---
## `Hello World!`

term src="node/repl-helloworld.txt"
---
## `Hello World!`

term src="node/repl-helloworldexec.txt"
---
# Sometimes all you need<br>is a good REPL
---
## Quick testing

###.slide What is `Infinity + 2`?
term.slide src="node/repl-use1.txt"
###.slide Hey, you never know...
---
## Getting out of the REPL
### Press CTRl-C twice, or...

term.slide src="node/repl-exit.txt"

###.slide Where did process come from?
---
## JavaScript's global context

### In a browser, your global, parent context is the document window.

###.slide Your execution is based off of your parent context.

###.slide `Math.PI === this.Math.PI`
---
## *Always* explore your context
<img src="img/decks/windowContext.jpg" class="focus-border">
---
## Node's global context
term src="node/repl-global.txt"
---
## global.process
term src="node/repl-process.txt"
###.center Lots of fun, useful stuff



