/*
 * grunt-bower-bootstrap
 * https://github.com/mattstyles/grunt-bower-bootstrap
 *
 * Copyright (c) 2013 Matt Styles
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: [
        'test/fixtures/vanilla/styles/**/*'
      ]
    },

    // Configuration to be run (and then tested).
    booty: {
      vanilla: {
        options: {
          componentPath: 'test/app/components',
          dest: 'test/fixtures/vanilla/styles'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*-test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean:tests', 'booty', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
