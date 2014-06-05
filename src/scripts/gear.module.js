require(['gear.list'], function(gear){
  //fetching gear directories
  var list = [];
  for(var i in gear.synths) {
    list.push(gear.synths[i]);
  };
  for(var i in gear.effects) {
    list.push(gear.effects[i]);
  };
  list.push('gear.factory');

  //fetching gear
  require(list, function(
  //these must be listed in the order that is listed above
  //synths
  optimus,
  //effects
  gain,
  //factory settings
  factory
  ){
    var gears = Array.prototype.slice.apply(arguments,[0,-1]);
    for(var i in gears){
      factory.constructsynth.call(gears[i]);
    };
  });
});
