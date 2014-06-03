module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    preprocessors: {
      'test/*.html': ['html2js']
    },
    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/jasmine-jquery/lib/*.js',
      'test/*.html',
      'test/*.js',
    ],
    autoWatch: true,
    browsers: [
      'Chrome',
      'Firefox'
    ],
    port: 9000
  });
};
