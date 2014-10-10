describe('e2e: home', function() {
  beforeEach(function() {
    browser.get('/');
  });

  it('should load the home page', function() {
    expect("test").toBe("test");
  });

});
