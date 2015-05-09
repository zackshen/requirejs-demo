module.exports = function(grunt) {
  'use strict';

  grunt.util.linefeed = '\n';

  grunt.initConfig({
    clean: {
      dist: 'dist'
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "js/",
          mainConfigFile: "js/config.js",
          name: "module",
          out: "dist/module.js"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['clean:dist', 'requirejs']);
}
