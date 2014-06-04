module.exports = (function() {
  var fs = require('fs'),
      url,
      enconding,
      synthbrew,
      partials;
  
  partials = {
    app: undefined,
    scripts: [
      {script: '../src/scripts/require.conf.js'},
    ],
    csss: [
      {css: '../src/libs/app.css'}
    ]
  };
  
  encoding = 'utf8';
  function readfile(file, title, cb) {
    url = __dirname + file;
    fs.readFile(file, encoding, function(err, data) {
      if(err) throw err;
      partials[title] = data;
      cb();
    });
  }
  
  function done() {
    var done = true;
    for(var key in partials) {
      if(!partials[key]) done = false;
    }
    if(done) return true;
  }
  
  readfile(__dirname + '/../libs/app.html', 'app', done);
  return partials;
})();
