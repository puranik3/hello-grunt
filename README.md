# About hello-grunt
A node.js project built to play with features of Grunt and understand Grunt.

# How to use this project
Assuming you have cloned this project, opened a terminal, and have the working directory as the root folder of the project...

  1. Run `npm install`  
     This installs all dependencies, especially Grunt and its plugins used in the project
     Note: The app can now be started from the project root folder using `node .`. But that is not what this project is for!
  2. Run `grunt` from the project folder  
     The tasks listed inside ./Gruntfile.js run in the order specified in the file.  
     The uglify task minifies the files in client/ folder. You will find the resulting uglified files in the generated build/ folder. We uglify only application files that are meant to execute in the browser.  
     The files in the server/ folder will automatically be formatted by jsbeautifier task.
