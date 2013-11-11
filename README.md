# grunt-bell

> Plays an ascii bell

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bell --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bell');
```

## The "bell" task

### Overview
In your project's Gruntfile, use the `bell` task during your custom tasks defined with `grunt.registerTask()` or `grunt.registerMultiTask()`.

```js
// sound the bell when these tasks complete
grunt.registerTask('default', ['sometask', 'anothertask', 'bell']);
```

## Release History
0.1.0 - 11/11/2013 Initial commit
0.1.1 - 11/11/2013 Updated readme
