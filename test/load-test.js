test('App loaded in the DOM', function() {
  ok($('#app'), 'App loaded in the DOM');
});

$('#toolbar-menu-btn').on('click', function() {
  test('toolbar menu click', function() {
    var s,e;
    s = (s == false)?true:false;
    e = ($('#toolbar').css('visibility') == 'none')?true:false;
    equal(e, s, 'Toolbar hides');
  });
});
$('#piano-roll-btn').on('click', function() {
  test('piano roll menu click', function() {
    var s,e;
    s = (s == false)?true:false;
    e = ($('#piano-roll').css('visibility') == 'none')?true:false;
    equal(e, s, 'Piano roll hides');
  });
});

$('#piano-roll-btn').trigger('click');
$('#toolbar-menu-btn').trigger('click');
