var Cache = (function() {
  function ACache() {
    this.items = [];
  }

  ACache.prototype = {
    set: function(item) {
      if (this.items.length >= 5) {
        items.splice(0, 1);
        this.items.push(item);
      } else {
        this.items.push(item);
      }
    },

    get: function(site) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].site == site) {
          // remove item from array and place in last position in the array
          return this.items[i];
        }
      }
    }
  }

  return ACache;
})();
