require([
  'jquery',
  'jqueryui',
  'jquerycorner',
  'gear.module',
  'gear.list'
], function($, synth) {
  $(function() {
    //menu button switch
    var menuopen = false;
    function mbs() {
      menuopen = (menuopen == false)?true:false;
      return menuopen;
    }

    $('#toolbar-menu-btn').on('click', function() {
      if(menuopen === true) {
        $('#toolbar').toggle('slide');
        $('#toolbar-menu-btn').animate({
          left: "+=250",
          opacity: 1
        });
        mbs();
      } else {
        $('#toolbar').toggle('slide');
        $('#toolbar-menu-btn').animate({
          left: "-=250",
          opacity: 0.20
        });
        mbs();
      }
    });

    //tools append

    //piano roll
    var pianoopen = false;
    function pbs() {
      pianoopen = (pianoopen == false)?true:false;
      return pianoopen;
    }

    $('#piano-roll-btn').on('click', function() {
      if(pianoopen == true) {
        $('#piano-roll').slideToggle();
        $('#piano-roll-btn').animate({
          bottom:'-=100',
          opacity: 0.20
        });
        pbs();
      } else {
        $('#piano-roll').slideToggle();
        $('#piano-roll-btn').animate({
          bottom:'+=100',
          opacity: 1
        });
        pbs();
      }
    });
    //output
    $('.output').corner('InvSteep br bl');
  });
});
