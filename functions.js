// EXERCISE 1

function makeLine(length){
  var line = "";
  for(var j =1; j <= length; j++){
    line = line + "* ";
  }
  return line + "\n";
}

function makeTriagle(length){
  var triangle = "";
  for (var lineNumber = 1; lineNumber <= length; lineNumber++){
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}

console.log(makeTriagle(10)); 

//EXERCISE 2

var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}  

console.log(helloCat(catSays));

//EXERCISE 3

var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

function movies(messageFunction, name) {
  messageFunction(name);
}

movies(favoriteMovie, "Finding Nemo");

//

function movies(messageFunction, name) {
  messageFunction(name);
}
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");


//EXERCISE 4

var cry = function cryFunction (){
  var sound = "boohoo";
  return sound;
}
cry();

//EXERCISE 5
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions ("happy", function(num) {
  var sound = ""; 
  for (var i = 0 ; i < num ; i++) {
      sound = sound + "ha" ;  
  }
  sound = sound +"!"; 
  return sound; 
});

//EXERCISE 6

function isOdd(num) {
  return num % 2 === 0;
}

console.log("Number is odd: " + isOdd(3));

//EXERCISE 7

const isEven = function (num) {
  return num % 2 === 0;
}

console.log(isEven(3));
console.log(isEven(8));

//EXERCISE 8
//Function with console.log
const sayHello = function(name) {
  console.log("Hello, " + name);
}

sayHello("Anastasia");

//Function with return
const returnSayHello = function (name) {
  return "hello, " + name;
}

const greeting = returnSayHello("Anastasia");
console.log(greeting);
