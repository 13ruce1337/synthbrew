require(['jquery','jqueryui', 'synth.module'], function($, undefined, synth) {
  $(function() {
    var menuopen;

    //menu button switch
    menuopen = false;
    function mbs() {
      menuopen = (menuopen == false)?true:false;
      return menuopen;
    }

    $('#toolbar-menu-btn').on('click', function() {
      if(menuopen === true) {
        $('.toolbar').toggle('slide');
        $('#toolbar-menu-btn').animate({
          left: "+=250",
          opacity: 1
        });
        mbs();
      } else {
        $('.toolbar').toggle('slide');
        $('#toolbar-menu-btn').animate({
          left: "-=250",
          opacity: 0.20
        });
        mbs();
      }
    });

  //tools append

  });
});
