"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

// use let
var fs = [];

var _loop = function _loop(i) {

    fs.push(function () {
        console.log(i);
    });
};

for (var i = 0; i < 2; i++) {
    _loop(i);
}
fs.forEach(function (f) {
    f();
});

// use default values in parameters
function greet(greeting) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dhiraj';

    console.log("greeting = " + greeting + "\n                 name = " + name);
}
greet("hello");

// use default for function
function greetFunction() {
    var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        return console.log("greet called");
    };

    func();
}
greetFunction();

// destructing

var firstName = "dhiraj";
var lastName = "kumar";
var person = { firstName: firstName, lastName: lastName };
console.log(person);
var mascot = { age: 20 };
var team = { person: person, mascot: mascot };
console.log(team);

// shorthand object assignments

var color = "red";
var speed = 10;
var drive = "gofun";
var car = _defineProperty({
    color: color,
    speed: speed,
    go: function go() {
        console.log("go for it");
    }
}, drive, function () {
    console.log(" go fun for it ");
});

console.log(car.color);
car.go();
car.gofun();

// spread operator

var first = [1, 2, 3];
var second = [4, 5, 6];
function addThreeThings(a, b, c) {
    var result = a + b + c;
    console.log(result);
}

addThreeThings.apply(undefined, first);

first.push.apply(first, second);
console.log(first);

// destructring

var _color$name = {
    color: "blue",
    name: "name"
},
    color = _color$name.color,
    name = _color$name.name;

console.log(color + "  " + name);

function generateObj() {
    return {
        color_: "blue",
        name_: "dhiraj",
        state_: "nsw"
    };
}

var _generateObj = generateObj(),
    firstname = _generateObj.name_,
    color_ = _generateObj.color_;

console.log(firstname, color_);

var _ref = ["red", "yellow", "blue"],
    first_ = _ref[0],
    third = _ref[2];

console.log(first_ + "  " + third);

var people = [{
    firstName: "dhiraj",
    lastName: " kumar"
}, {
    firstName: " Neeraj",
    lastName: "kumar"
}];
people.forEach(function (_ref2) {
    var firstName = _ref2.firstName;
    return console.log(firstName);
});

var promise = new Promise(function (resolve, reject) {
    throw new Error("error");
    if (true) {
        resolve("success");
        throw new Error("error");
    } else {
        reject("failure");
    }
});

//promise.then( result => console.log(result));

//promise.catch( error => console.log(error));

promise.then(function (result) {
    return console.log(result);
}, function (error) {
    return console.log(error);
});

//https://egghead.io/lessons/ecmascript-6-promises-with-es6