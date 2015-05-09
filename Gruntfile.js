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
          name: "lib",
          optimize:"none",
          out: "www/libs/lib.js",
          //wrap: {
              //startFile:"./js/start.frag",
              //endFile:"./js/end.frag"
          //}
            wrap:true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('default', ['clean:dist', 'requirejs']);
}
