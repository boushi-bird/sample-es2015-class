'use strict';

class Message {
  constructor(message) {
    this.message = message;
    this.show = this.show.bind(this);
  }
  show() {
    try {
      console.log(this.message);
    } catch (e) {
      console.error(e);
    }
  }
}

var m = new Message('Hello!');

m.show();
// Hello!

var show = m.show;
show();
// Hello!

setTimeout(m.show, 0);
// Hello!
