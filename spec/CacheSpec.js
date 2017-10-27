describe('Cache', function() {

  var myCache;
  var siteOne;
  var siteTwo;
  var result;

  beforeEach(function() {
    myCache = new Cache();
    siteOne = new Item('foo.com', 'December 17, 1995 03:24:00');
    siteTwo = new Item('bar.com', 'December 17, 1997 03:24:00');
  });

  it('should store new sites in the array', function() {
    myCache.set(siteOne);
    expect(myCache.items.length).toEqual(1);
  });
});
