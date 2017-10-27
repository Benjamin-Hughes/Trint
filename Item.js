var Item = (function() {
  function AItem(site, date) {
    this.site = site;
    this.date = new Date(date);
  }

  return AItem;
})();
