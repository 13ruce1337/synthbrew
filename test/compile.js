var hogan = require('hogan.js'),
    fs = require('fs'),
    partials = require('../src/scripts/htmlconfig.js'),
    rough,
    page;

fs.readFile(__dirname + '/template.html', 'utf8', function(err, template) {
  if(err) throw err;
  rough = hogan.compile(template);
  page = rough.render(partials);
  fs.writeFile(__dirname + '/test.html', page, function(err) {
    if(err) throw err;
  });
});
