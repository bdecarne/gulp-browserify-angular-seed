describe('my app', function() {
  beforeEach(function() {
    browser().navigateTo('http://localhost:3000');
  });

  it("wookie exists", function() {
    expect("test").toBe("test");
  });

});
