describe('item', function() {

  var item;
  beforeEach(function() {
    item = new Item('foo.com', 'December 17, 1995 03:24:00');
  })

  it('should store a url upon creation', function() {
    expect(item.site).not.toBe(null);
  })

  it('should store the current date upon creation', function() {
    expect(this.date).not.toBe(null);
  })
})
