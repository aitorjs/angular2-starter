/* const message = 'hello';

function saySomething(message: string = 'whats up') {
    console.log(message);
}

saySomething(message); */
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        console.log(message);
    };
    return Greeter;
})();
var greeter = new Greeter();
greeter.saySomething('hello');
