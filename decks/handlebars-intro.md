# Javascript Templating
---

### Javascript Templating
  - There are a dozen solutions for Javascript Templating
  - Not one solution may be the best for every project
  - Pick the template solution that has a good api and clean syntax
  - Logic vs Logic-less?
  - Mixing Logic with the templates can get hairy but how much logic is too much?
  - <img src="img/decks/handlebars/handlebars_logo.png" />

---
### Handlebars
  - Check out http://tryhandlebarsjs.com To see it in action
  - There's a handful of frameworks (sammy.js, SproutCore, Ember,...) have handlebars support built in
  - Mustache Templates are compatible inherently since Handlebars is basically an extension to Mustache
  - Handlebars is simple, its just HTML with embedded handlebar expressions
  - If it weren't for Block expressions and helpers Handlebars would be a completely logic-less templating language that keeps the presentation and the logic separate how it should be.
  - Oh and it's Compiled rather than interpreted.
  - It supports Simple and Nested Paths allowing you to look below the context

---
### Handlebars Basics
  - There are a number of ways to include a template into your application
  - The way instructed by the Docs says to place your code in a script tag, micro-templating pattern:
  code src="templating/handlebars-include.js"
  - Browsers wont try to parse this tag as JavaScript, which is what we want.
  - When you want to parse the template:

  code src="templating/handlebars-parse.js"
  - Simple, Right??

---
### How does that compiling step work?
  - Well in the internals of the library Handlebars takes the template string and 'compiles' it into a Handlebars template function
  - You can then render the template by passing a data object (context) into this function.
  - Caching this template is key, You can re-render this template at any time without re-compiling it again.

---
### Handlebars {{ Expressions & Helpers }}
  - Handlebars has the concept of an expression and a helper that contains logic
  - These expressions are automatically escaped for <strong>safety</strong>. Applying {{{expression}}} will unescape it.
  - Block expressions gives you the ability to define helpers that will apply a different context to a section of your template.
  - These helpers allow us to evaluate the context against javascript code
  - Handlebars comes with a few pre-defined helpers
  - The <em>with</em> Block Helper - <strong> {{#with foo}} {{/with}} </strong>
  - The <em>each</em> block helper - <strong> {{#each foo}} {{/each}} </strong>
  - The <em>if</em> block helper -  <strong> {{#if foo}} {{/if}} </strong>
  - The <em>unless</em> block helper  <strong> {{#unless foo}} {{/unless}} </strong>
  - <h3 class='slide center'>What happens when we need some custom logic? </h3>

---
### Handlebars Helpers
  - "Handlebars helpers can be accessed from any context in a template. You can register a helper with the Handlebars.registerHelper method." - handlebarsjs
  - These helpers are are registered with the Handlebars runtime and available when rendering the template
  - Handlebars invokes its helper functions with a variable (this) reflecting the current context.
  - Helpers can also take a context (using paths)
  - Helpers give us some logic-less "flexibility"

---
### What's It look like?
- The Template
code class='runnable' src='templating/handlebars-template.html'

---
### What's It look like?
<div id='stache-container'>The Javascript</div>
<div style='clear:both'></div>

code src="templating/handlebars-example.js" class="code" runnable='true' globals='Handlebars,$'>

---
### Worried about browser compilation?
  - The most expensive part of Handlebars is the compile step. Eliminating the client-side compilation will boost performance
  - Handlebars gives us the ability to pre-compile the templates server side
  - With the pre-compiled templates we only need the much smaller runtime library and don't have to worry about compiling in the browser
  - To Pre-Compile - first install the package - npm install handlebars (specify -g for global in any project)
  - Using the Compiler
  code src="templating/handlebars-compiler.js"
  - When pre-compiling the compiler will place the templates in Handlebars.templates
  - The INPUT filename will be appended to Handlebars.templates.INPUT
  - Now include the Handlebars runtime library, the compiled file, re-reference the template in your code and voila you are ready to go.

---
### What else?
  - Sometimes when you are working with templates and need to know what the current context is. Keeping a debug helper around can save some time.
code src="templating/handlebars-debug.js"

  - Also Check out some Templating Performance Comparisons <br/> http://jsperf.com/dom-vs-innerhtml-based-templating/73
