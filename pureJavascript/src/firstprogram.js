/**
 * Created by dhiraj.kumar on 3/01/2017.
 */
// using arrow function

var createGreeeting = function(message,name){
    return message+name;
}

var  arrowGreeting = message => "hello"+message;

console.log(arrowGreeting("hello"));




