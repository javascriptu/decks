MicroTemplating / Embedded JavaScript
=====================================
<script src="scripts/underscore.js"></script>
<style>
  .template-result {
  box-shadow:5px 5px 5px hsla(180,100%,50%,.5);
  border:1px solid  hsla(180,100%,50%,.5) !important;
  width : 80%;
  margin:0 auto !important;
  min-height:1em;
  }
  button.runTemplate {
    border:1px solid #999;
    font: 22px Verdana, sans-serif;
    cursor:pointer;
    border-radius:5px;
  }
</style>
---
## Templating

### The most common solution in any language is just an inversion of the priority of strings vs code
<br>
<div class="slide">
  <h3>Instead of a file being read as<h3>
  <h4 class="center">"This is code until I get told otherwise"</h4>
</div>
<div class="slide">
  <h3>A template file would be read as</h3>
  <h4 class="center"> "This is a string until I get told there is code"</h4>
</div>
<br>
<h3 class="slide center"> These are referred to as "Embedded Language" templates</h3>
---
## Embedded Language Templates

- ### ERB (Embedded Ruby)
- ### EmbPerl (Embedded Perl)
- ### EmPy (Embedded Python)
- ###  PHP (The whole freaking thing)

###.slide (Among many others)
---
## Upsides to Embedded Templates

- ### No context switching cost for developers
    You are writing in the exact same language.
- ### Unlimited power
    Anything you can do in your code you can do in a template
- ### Generally pretty fast
    Can parse to just a series of strings and code.
---
## Downsides to Embedded Templates

- ### Higher learning cost for non-developers
    Potentially higher cost for integrating frond end developers unfamiliar with the embedded language.
- ### Unlimited power
    While you *can* do anything, but you shouldn't actually do much in templates.
- ### An API not designed for templating
    A complete programming language addresses a different set of concerns than templating.
---
## Embedded Language for JavaScript

- ### [Embedded JavaScript (ejs)](http://embeddedjs.com/)
- ### [doT.js](http://olado.github.com/doT/)
- ### [underscore templates/microtemplate](http://underscorejs.org/#template)
- ### And others
---
## Using Underscore

### Data:

<code class="code data">{ name : "World!" }</code>

### Template:

<textarea class="code template" >Hi <%= name %></textarea>

<button type='button' class='runTemplate center'>Run Template</button>

<div class="template-result"></div>
---
## Conditionals

### Data:

<code class="code data">{ num : 42 }</code>

### Template:

<textarea class="code template" ><% if (num === 42) { %>
You win life!
<% } else { %>
THAT IS WRONG!
<% } %></textarea>

<button type='button' class='runTemplate center'>Run Template</button>

<div class="template-result"></div>
---
## Loops

### Data:

<code class="code data">{ names : ['bob','joe','Kate Winslet'] }</code>

### Template:

<textarea class="code template" ><% for(var i = 0; i < names.length; i++) { %>
  Hi <%= names[i] %>!<br>
<% } %></textarea>

<button type='button' class='runTemplate center'>Run Template</button>

<div class="template-result"></div>

---
## It's just JavaScript

- ### The other libraries offer much of the same
    But it's all JavaScript.
- ### Easy to use, and it might already be available to you
    With underscore, you get minimal templating baked-in
- ### But it's *JavaScript*
    Embedded language templates are great in the right hands. In the wrong hands you get an unmaintainable mess.

<script>
$('.runTemplate').click(runTemplate);
function runTemplate(evt) {
  var data,target = $(evt.target);
  var slide = target.closest('.slide');
  var dataString = slide.find('.data').data('codemirror').getValue();
  var templateString = slide.find('.template').data('codemirror').getValue();
  var outputElement = slide.find('.template-result');
  outputElement.html('');
  var result = '';
  try {
    var template = _.template(templateString);
    eval('data = ' + dataString);
    result = template(data);
  } catch(e) {
    result = '<span style="color:red">Error</span>'
    console.log(e);
  }
  outputElement.html(result);
}
</script>

