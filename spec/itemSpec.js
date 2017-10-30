describe('item', function() {

  var item;
  beforeEach(function() {
    item = new Item('foo.com', 'December 17, 1995 03:24:00');
  })

  it('should store a url upon creation', function() {
    expect(item.site).not.toBe(null);
  })

  it('should store a date upon creation', function() {
    expect(this.date).not.toBe(null);
  })

  describe('updateDate', function() {

    it('should update the date to the present date', function() {
      item.updateDate();
      expect(item.date).not.toMatch("December 17, 1995 03:24:00");
    })
  })
})
