// EXERCISE 1
/*
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

//AGE CALCULATOR
function ageCalculator(name, yearOfBirth, currentYear) {
  const math = currentYear - yearOfBirth;
  return`${name} is ${math} years old`
}

console.log(ageCalculator("Miranda", 1990, 2023));

//Hundreds
function howManyHundreds (botteles){
  return Math.floor(botteles / 100)
}


//Shapes
console.log(howManyHundreds(894));

function calculateRectangleArea(length, width){
  if (length < 0 || width < 0) return;
  let rectangle = length * width;
  return rectangle;
}
function calculateTriangleArea(base, height){
  if (base < 0 || height < 0) return;
  let triangle = base * height / 2;
  return triangle;
}

function calculateCircleArea(radius){
if (radius < 0) return;
let circle = Math.PI * Math.pow(radius,2);
return circle;
}

console.log(calculateTriangleArea(10, 5))

//
const sayHi = function(){
alert("Hi!");
}
setTimeout(sayHi, 3000); //first parameter is sayHello and not sayHello()--this is how we pass the function itself as an parameter, rather than immediately calling the sayHello function and passing its return value (if it had one).

//

const sayWow = function(){
  alert("Wow!");
}

const timer = setInterval(sayWow, 3000); 

clearInterval(timer);

//It's crucial to store that identifier inside variable for later because without it, the timer cannot be stopped!
*/
//FARM
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
