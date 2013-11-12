/*
 * grunt-bell
 * https://github.com/dragonworx/grunt-bell
 *
 * Copyright (c) 2013 Ali Chamas
 * Licensed under the MIT license.
 */

var start = process.hrtime();

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

	grunt.registerTask('bell', 'Ding-a-ling', function () {
		var end = process.hrtime(start);
        var secs = (end[0] + (end[1] / 1000000000.0)).toFixed(2);
        var msg = 'ESC[92m ESC[0mESC[32m\nTasks completed ESC[0mESC[90m (' + secs + 's)ESC[0m';
        msg = msg.replace(/ESC/gi, '\033');
        console.log(msg + '\u0007');
	});

};
