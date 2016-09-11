'use strict';

class Message {
  constructor(message) {
    this.message = message;
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

var show = m.show.bind(m);
show();
// Hello!

setTimeout(m.show.bind(m), 0);
// Hello!

setTimeout(() => {
  m.show();
}, 0);
// Hello!
