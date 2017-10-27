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
        if (this.items[i].site === site) {
          var tmp = this.items.splice(i, 1);
          tmp[0].updateDate();
          this.items.push(tmp[0]);
          return this.items[this.items.length - 1];
        }
      }
    }
  }

  return ACache;
})();
