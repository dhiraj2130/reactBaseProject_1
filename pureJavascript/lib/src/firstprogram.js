"use strict";

/**
 * Created by dhiraj.kumar on 3/01/2017.
 */
// using arrow function

var createGreeeting = function createGreeeting(message, name) {
  return message + name;
};

var arrowGreeting = function arrowGreeting(message) {
  return "hello" + message;
};

console.log(arrowGreeting("hello"));