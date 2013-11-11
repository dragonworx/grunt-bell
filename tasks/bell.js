/*
 * grunt-bell
 * https://github.com/dragonworx/grunt-bell
 *
 * Copyright (c) 2013 Ali Chamas
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

	grunt.registerTask('bell', 'Ding-a-ling', function () {
		console.log('\u0007');
	});

};
