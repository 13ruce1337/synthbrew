describe('test', function() {
  var p = window.__html__['test/index.html'];
  var page = p.toString();
  console.log(page);
  it('add some numbers', function() {
    expect(1 + 5).toEqual(6);
  });
  it('find the dom node', function() {
    setFixtures(page);
  });
});
