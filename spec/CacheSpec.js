describe('Cache', function() {

  var myCache;
  var siteOne;
  var siteTwo;
  var result;
  var spy;

  beforeEach(function() {
    myCache = new Cache();
    siteOne = new Item('foo.com', 'December 17, 1995 03:24:00');
    siteTwo = new Item('bar.com', 'December 17, 1997 03:24:00');
    spy = spyOn(siteOne, 'updateDate');
    myCache.set(siteOne);
    myCache.set(siteTwo);
  });

  it('should store new sites in the array', function() {
    expect(myCache.items.length).toEqual(2);
  });

  it('should return a matching object when searched', function() {
    result = myCache.get("foo.com");
    expect(result.site).toEqual('foo.com');
  });

  it('should return a message when no matching items are found', function() {
    expect(myCache.get('random.com')).toEqual("no items found");
  })

  it('should update the date before returning an item', function() {
    myCache.get("foo.com");
    expect(spy).toHaveBeenCalled();
  });
});
