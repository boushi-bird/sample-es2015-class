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

var show = m.show;
show();
// [TypeError: Cannot read property 'message' of undefined]

setTimeout(m.show, 0);
// undefined
