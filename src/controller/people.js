const Base = require('./base.js');

var people = {
  name: 'bitebit'
};

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  getPeople() {
    this.success(people);
  }
  post() {
    this.success('post');
  }
  crash() {
    this.success('crash');
  }
};