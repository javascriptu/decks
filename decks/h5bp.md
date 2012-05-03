Laying the foundation
=====================
---
#<img src="img/workshop/1/h5bp-ss.jpg" class="focus-border">
---

## HTML5 Boilerplate
###.slide Features:
- ### Solid setup
  A checklist of things you'll probably need to think about anyway
- ### jQuery
  The one and only.
- ### Modernizr
  Feature detector. HTML5 supporter. Conditional loader.
- ### Outdated browser assistance
  IE class tags. Chrome frame. IE rendering engine tag.
---

# Why a boilerplate?

---

## A Reverse Todo List (A Done List)
###.center Delete what you don't need.<br>Customize the rest.
- Include an HTML5 shim? Awesome!
- Google Analytics? Definitely!
- Chrome frame? Maybe not this time.
- Ensure IE Edge or Chrome frame? Oh yeah!
- Google Analytics? Check!
- IE Tags? Why not?

---

## The customized directory
<pre><code src="h5bp-dirlist.txt" data-highlight=""></code></pre>

---

## Generic (and attractive) 404 page
<pre><code src="h5bp-dirlist.txt" data-highlight="1:*"></code></pre>

---

## Apple Touch Icons
<pre><code src="h5bp-dirlist.txt" data-highlight="2.3.4.5.6:*"></code></pre>
Icons for use on iOS and Android


---
## Cross Domain XML
<pre><code src="h5bp-dirlist.txt" data-highlight="7:*"></code></pre>
For remote request granting

---

## Our CSS Directory
<pre><code src="h5bp-dirlist.txt" data-highlight="8:*"></code></pre>

---

## A generic favicon
<pre><code src="h5bp-dirlist.txt" data-highlight="9:*"></code></pre>
Favicons are retrieved by browsers and used in bookmarks and the URL bar

---

##Humans.txt
<pre><code src="h5bp-dirlist.txt" data-highlight="10:*"></code></pre>
Because we're not robots

---

## Our index
<pre><code src="h5bp-dirlist.txt" data-highlight="11:*"></code></pre>

---

## Our scripts directory
<pre><code src="h5bp-dirlist.txt" data-highlight="12:*"></code></pre>

---

## A basic robots.txt
<pre><code src="h5bp-dirlist.txt" data-highlight="13:*"></code></pre>
Dictate how search engines can crawl our site

---

## Original JS Directory
<pre><code src="h5bp-origJsDir.txt" data-highlight=""></code></pre>

---

## Our Preferred JS Structure
<pre><code src="h5bp-preferredJsDir.txt" data-highlight=""></code></pre>

---

## <code>main.js</code> vs <code>script.js</code>
<pre><code src="h5bp-preferredJsDir.txt" data-highlight="main.js"></code></pre>
<h3 class="slide center"><code>main.js</code> is a RequireJS convention
<h3 class="slide center">(and it is more meaningful than <code>script.js</code>)


---
## The Value of "vendor"
<pre><code src="h5bp-preferredJsDir.txt" data-highlight="3:vendor"></code></pre>
<h3 class="slide center">Code that is <em>not</em> ours
<h3 class="slide center">Should <em>not</em> be alongside our code


---
## Other H5BP Goodness
### Modernizr combined with conditional comments
<pre><code src="h5bp-header.txt" data-highlight=""></code></pre>


---
## Other H5BP Goodness
### Modernizr combined with conditional comments
<pre><code src="h5bp-header.txt" data-highlight="2:....!--,4:--...."></code></pre>


---
## Other H5BP Goodness
### Modernizr combined with conditional comments
<pre><code src="h5bp-header.txt" data-highlight="2.4:*"></code></pre>


---
## Other H5BP Goodness
### Modernizr combined with conditional comments
<pre><code src="h5bp-header.txt" data-highlight="3:*"></code></pre>


---
## Other H5BP Goodness
### Modernizr combined with conditional comments
<pre><code src="h5bp-header.txt" data-highlight="3:lt-ie7"></code></pre>


---
## Other H5BP Goodness
### Modernizr combined with conditional comments
<pre><code src="h5bp-header.txt" data-highlight="no-js"></code></pre>


---
## Chrome 19 after modernizer
<pre><code src="h5bp-chrome-header.txt" data-highlight="wtf"></code></pre>


---
## Chrome 19 after modernizer
<pre><code src="h5bp-chrome-header.txt" data-highlight="2:js"></code></pre>


---
## Chrome 19 after modernizer
<pre><code src="h5bp-chrome-header.txt" data-highlight="no-[^ ]*"></code></pre>


---
## IE8 after modernizer
<pre><code src="h5bp-ie8-header.txt" data-highlight="blah"></code></pre>


---
## IE8 after modernizer
<pre><code src="h5bp-ie8-header.txt" data-highlight="2:lt-ie9"></code></pre>


---
## IE8 after modernizer
<pre><code src="h5bp-ie8-header.txt" data-highlight="hashchange,fontface,postmessage,generatedcontent,(local|session)storage"></code></pre>

