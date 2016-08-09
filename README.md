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

## TODO
  - Explore concatentation of JS and CSS files - these would likely create conflicts in JS and CSS. What is the best way to handle these conflicts?
  - Explore if sharing of config/.jsbeautifyrc between editor and Grunt is possible
  - Links for other IDEs and installation notes