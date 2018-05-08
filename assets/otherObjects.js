'use strict';

class AnotherObject {
  constructor(obj) {
    this.id = obj.id || 0;
    this.title = obj.title || 'Mr.';
  }
};

export default {
  AnotherObject
}