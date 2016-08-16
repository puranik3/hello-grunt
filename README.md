# About hello-grunt
A node.js project built to play with features of Grunt and understand it.

# How to use this project to understand Grunt
Assuming you have cloned this project, opened a terminal, and have the working directory as the root folder of the project...

  1. Run `npm install`  
     This installs all dependencies, especially Grunt and its plugins used in the project
     Note: The app can now be started from the project root folder using `node .`. But that is not what this project is for!
  2. Run `grunt` from the project folder  
     The tasks listed inside ./Gruntfile.js run in the order specified in the file.  
     The uglify task minifies the files in client/ folder. You will find the resulting uglified files in the generated build/ folder. We uglify only application files that are meant to execute in the browser.  
     The files in the server/ folder will automatically be formatted by jsbeautifier task.

# Using jsbeautifier
JS, CSS and HTML formatting is enforced using the [jsbeautifier plugin for Grunt](https://github.com/vkadam/grunt-jsbeautifier/). This does essentially what [jsbeautifier.org](
[jsbeautifier.org](http://jsbeautifier.org/)) does on the web - style JS (as also HTML and CSS). Most major IDEs support formatting as per jsbeautifier.org. Some may require plugins. VSCode supports formatting as per jsbeautifier.org but does not provide a means to configure .jsbeautifyrc without a plugin.

You can find below a list for some popular IDEs. You can find additional pointers at [jsbeautifier.org/] (scroll to the bottom of the home page).
|IDE     |Link                                     |  
|--------|-----------------------------------------|  
| VSCode |[VSCodeBeautify](https://github.com/HookyQR/VSCodeBeautify) or <br/> [vscode-JS-CSS-HTML-formatter](https://marketplace.visualstudio.com/items?itemName=lonefy.vscode-JS-CSS-HTML-formatter)|  
| Atom |[Native support in Atom](https://github.com/Glavin001/atom-beautify/blob/master/docs/options.md)|  
| SublimeText |[Sublime-HTMLPrettify](https://github.com/victorporof/Sublime-HTMLPrettify)|  

# Using jscs
jscs is an alternative to using jsbeautifier. It enjoys good community support as well. It has recently been merged with the ESLint project.  

# Using uglify
Minification of js files is done using [uglify plugin for Grunt](https://www.npmjs.com/package/grunt-contrib-uglify). This is based on the node module [uglify-js](https://github.com/mishoo/UglifyJS2).  
To generate a minified file per js file, use this plugin task in conjunction with [grunt.file.expandMapping method](http://gruntjs.com/api/grunt.file#grunt.file.expandmapping).

# Using cssmin
Minification of css files is done using [cssmin plugin for Grunt](https://www.npmjs.com/package/grunt-contrib-cssmin). This is based on the node module [clean-css](https://github.com/jakubpawlowicz/clean-css).  

# Processing HTML
References to minified css and js files in HTML need to be updated once minification is done (replace *.js and *.css includes with *.min.js and *.min.css). Popular Grunt plugins for this purpose are
  - [usemin](https://www.npmjs.com/package/grunt-usemin).
  - [processhtml](https://www.npmjs.com/package/grunt-processhtml). This is based on the node module [node-htmlprocessor](https://github.com/dciccale/node-htmlprocessor).  

Both these plugins work by marking up HTML with comments that instruct the plugins what to do. Unlike popular plugins for JS (like uglify) that work with an Abstract Syntax Tree to do their job, these plugins (or the libraries behing them) use regukar expressions to get their job done (however usemin is actively working towards parsing HTML to do stuff). Right now, none of these can automatically detect js and css includes and replace them with minified version without extra markup from developer (in the form of comments "instructing" them).  

usemin seems a better option than processhtml. I feel this is due to the following factors...
  - usemin reduces duplication of instructions required for Grunt tasks. usemin works with uglify, cssmin, concat and filerev to automatically generate tasks for minification, concatenation of files etc. processhtml OTOH requires duplication of instructions for uglify, cssmin etc. (in the form of Grunt tasks) and replacement of \*.js/\*.css with \*.min.js/\*.min.css (via processhtml markup in HTML). In case of usemin, the usemin-specific markup defines the uglify, cssmin (etc.) tasks automatically. This also reduces developer effort to keep the minification and replacement tasks "in sync" (developer doesn't need to bother to make changes in Grunt file minification task as well as HTML "task markup" when it is so required - example when the "build" folder path is changed for some reason).
  - they seem to be more active and forward-thinking (e.g. moving towards HTML parsing).
  - it has contributors of great repute (not to say that processhtml doesn't, but I have come across the names of usemin's contributors again and again in the web community - many guys are from Google).  

The preference for usemin is also echoed by the far higher numbers of downloads (when compared to processhtml).

# Inlining web component includes
Web components are included using html includes. The [vulcanize node module](https://www.npmjs.com/package/vulcanize) combines the web components included in a targeted HTML documents into a single one that may be included instead of the original includes. There exists a [Grunt plugin to create the 'vulcanization' task](https://www.npmjs.com/package/grunt-vulcanize).  

# TODOs
  - Explore Grunt task to automatically replace references of uglify processed \*.js with built \*.min.js. libs2min seems to do so with some restrictions on where the minified files should exist. As of now, I've not figured out any candidate that does this task seamlessly.   
    Additional References:  
    - https://github.com/hemanth/grunt-usemin-example
    - https://github.com/yeoman/grunt-usemin/issues/171
    - http://stackoverflow.com/questions/16761272/how-to-configure-grunt-to-replace-bower-dependencies-by-its-minified-versions
    - https://github.com/Rauno56/grunt-usemin/blob/master/lib/config/libs2min.js#L26
  - Explore concatentation of JS and CSS files - these would likely create conflicts in JS and CSS. What is the best way to handle these conflicts?
  - The cssmin:build task seems to work fine while creating 1-1 mapped .min.css files. The options and configuration of this task need to be validated through a better understanding of cssmin usage though.
  - Explore if sharing of config/.jsbeautifyrc between editor and Grunt is possible
  - Links for other IDEs and installation notes
