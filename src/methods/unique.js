'use strict';

module.exports = function unique(key) {
  let collection;

  if (key === undefined) {
    collection = this.items.filter(function(element, index, self) {
      return self.indexOf(element) === index;
    });
  } else {
    collection = [];

    const usedKeys = [];

    for (let iterator = 0; iterator < this.items.length; iterator++) {
      let uniqueKey;
      if (typeof key === 'function') {
        uniqueKey = key(this.items[iterator]);
      } else {
        uniqueKey = this.items[iterator][key];
      }

      if (usedKeys.indexOf(uniqueKey) === -1) {
        collection.push(this.items[iterator]);
        usedKeys.push(uniqueKey);
      }
    }
  }

  return new this.constructor(collection);
};
