module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    execute: {
      build: {
        src: [
          'src/bin/compile.js'
        ]
      },
      testbuild: {
        src: [
          'test/compile.js'
        ]
      }
    },
    watch: {
      scripts: {
        files: [
          'src/*.*',
          'test/*.*'
        ]
      }
    },
    open: {
      dev: {
        path: __dirname + '/test/test.html',
        app: 'Google Chrome'
      }
    }
  });

  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['execute:build']);
  grunt.registerTask('test',['execute:testbuild', 'open', 'watch']);
};
