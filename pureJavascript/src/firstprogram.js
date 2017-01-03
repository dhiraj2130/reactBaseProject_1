/**
 * Created by dhiraj.kumar on 3/01/2017.
 */
// using arrow function

var createGreeeting = function(message,name){
    return message+name;
}

var  arrowGreeting = message => "hello"+message;

console.log(arrowGreeting("hello"));

// use let
var fs =[];
for(let i=0;i<2;i++){

    fs.push(function(){
        console.log(i);
    })
}
fs.forEach(function(f){
    f();
})

// use default values in parameters
function greet(greeting,name ='dhiraj'){
    console.log(`greeting = ${greeting}
                 name = ${name}`);
}
greet("hello");

// use default for function
function greetFunction(func = () => console.log("greet called") ){
    func();
}
greetFunction();


// destructing

let firstName ="dhiraj";
let lastName ="kumar";
let person = {firstName,lastName};
console.log(person);
let mascot ={age:20}
let team = { person,mascot};
console.log(team);

// shorthand object assignments

var color ="red";
var speed = 10;
var drive = "gofun";
var car ={
    color,
    speed,
    go(){
        console.log("go for it");
    },
    [drive] : function(){
        console.log( " go fun for it ");
    }
}

console.log(car.color);
car.go();
car.gofun();

// spread operator

let first = [1,2,3];
let second =[4,5,6];
function addThreeThings(a,b,c){
    let result  = a+b+c;
    console.log(result);
}

addThreeThings(...first);

first.push(...second);
console.log(first);

// destructring

var {color,name} ={
    color:"blue",
    name:"name"
}
console.log(color+"  "+name);

function generateObj(){
    return {
        color_:"blue",
        name_:"dhiraj",
        state_:"nsw"
    }
}

let {name_:firstname,color_} = generateObj();
console.log(firstname,color_);

var [first_,,third] = ["red","yellow","blue"];
console.log(first_+"  "+third);

var people = [
    {
        firstName : "dhiraj",
        lastName : " kumar"
    },
    {
        firstName : " Neeraj",
        lastName :"kumar"
    }
]
people.forEach(({firstName}) => console.log(firstName));

var promise = new Promise((resolve,reject) => {
    throw new Error("error");
    if(true){
        resolve("success");
        throw new Error("error");
    }else{
        reject("failure");
    }
});

 //promise.then( result => console.log(result));

//promise.catch( error => console.log(error));

promise.then( result => console.log(result), error => console.log(error));

//https://egghead.io/lessons/ecmascript-6-promises-with-es6
