### Trint Interview Tech Test

A (very) simple caching system that stores urls and the date they were last viewed.

## To get started

There's not much setup - clone the repo and you should have everything you need.
Everything is designed to run from the browser console, so the easiest way to get
started is to run the test suite using the following command from the project root:

```
open SpecRunner.html
```

Now we know everything is working correctly we can experiment ourselves by creating
a cache object and some items to store in the browser console:

```Javascript
var myCache = new Cache();
var itemOne = new Item('foo.com', 'December 17, 1995 03:24:00');
var itemTwo = new Item('bar.com', 'December 17, 1997 03:24:00' );
```

We can store the items using the ```set()``` method:

```Javascript
myCache.set(itemOne);
myCache.set(itemTwo);
```
We can also search for an item using the ```get()``` method:
```Javascript
myCache.get('foo.com');
```

## Area's for further improvement:

- Better separation of concerns in tests through mocking of date and item objects
- Have the ```get()``` function create an new item if it doesn't find one in the list
- Sanitise search input to prevent errors/tampering.
