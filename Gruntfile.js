module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    execute: {
      build: {
        src: [
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
          __dirname + '*.js',
          __dirname + '/src/libs/*.js',
          __dirname + '/src/libs/*.css',
          __dirname + '/src/libs/*.html',
          __dirname + '/src/bin/*.js',
          __dirname + '/src/scripts/*.js',
          __dirname + '/test/*.js',
        ],
        tasks: [
          'execute:testbuild',
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
