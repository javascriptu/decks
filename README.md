JavascriptU Slide Templates
===========================

This is the template we will be using for all of our decks.

Decks are written in a flavor of markdown in /decks/

## Deckdown / Deck.js flavored Markdown

* Ordered/Unordered lists have class `slide` added to the list items
* Headers are found anywhere in the text by a hash-space-text string e.g. `# Header1`
* You can specify classes on headers ala `#.slide Slide Header` or `#.center Centered Header`
* Indented code blocks are thrown into codemirror.
  * The first line can start with `.runnable [attributes]` to indicate the codemirror block should be runnable in-page
  * The [attributes] are appended to the code block
  * You can specify highlighted portions via a `highlight` attribute with a specific syntax `regex,line#:regex` eg `global,2:foo,3:bar`
  * specifying `code` as the first term on a line starts a code block. Useful for remote src grabbing with `code src="helloworld.js"`
  * probably more!

## Generating the deck

Via the query string you can specify the following parameters in order to generate the final deck

* deckDir
  * the basedir to find the deck pieces default="./decks"
* cssDir
  * the css directory where themes are found default="./css"
* theme
  * the css file (minus the extension) default="javascriptU" (try 'web2.0')
* ext
  * the extension to use for deck pieces default=".md"
* decks
  * the comma separated list of decks to retrieve and generate the presentation
* intro
  * boolean, whether or not to include the "intro" deck, default=true
* title
  * the title of the presentation document


MIT License
-----------
Copyright (c) 2012 javascriptU

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
