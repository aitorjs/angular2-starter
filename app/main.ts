/* const message = 'hello';

function saySomething(message: string = 'whats up') {
    console.log(message);
}

saySomething(message); */

class Greeter {
  saySomething(message: string) {
    console.log(message);
  }  
}

var greeter = new Greeter();

greeter.saySomething('hello');