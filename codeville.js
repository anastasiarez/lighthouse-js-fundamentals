// OPTION 1

function finalPosition(moves) {
  let x = 0;
  let y = 0;
  for (let move of moves) {
    switch (move) {
    case 'north':
      y += 1;
      break;
    case 'south':
      y -= 1;
      break;
    case 'east':
      x += 1;
      break;
    case 'west':
      x -= 1;
      break;
    }
  }
  return [x, y];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];
console.log(finalPosition(moves));

// OPTION 2

function finalPosition(moves) {
  let x = 0;
  let y = 0;

  for (let move of moves) {
    if (move === 'north') {
      y++;
    } else if (move === 'south') {
      y--;
    } else if (move === 'east') {
      x++;
    } else if (move === 'west') {
      x--;
    }
  }

  return [x, y];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
console.log(finalPosition(moves)); */

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