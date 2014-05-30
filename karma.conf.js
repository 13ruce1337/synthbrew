module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: ['*.js'],
    autoWatch: true,
    browsers: [
      'Chrome',
      'Firefox'
    ],
    port: 9000
  });
};
