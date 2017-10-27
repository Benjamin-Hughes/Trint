var Item = (function() {
  function AItem(site, date) {
    this.site = site;
    this.date = new Date(date);
  }

  AItem.prototype = {
    updateDate: function() {
      this.date = new Date(Date.now());
    }
  }

  return AItem;
})();
