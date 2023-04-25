// EXERCISE 1
const amounts = [61.00, 52.25, 112.99, 5.00]; 

let total = 0;
for (let sum of amounts) {
  total += sum;
}
console.log('Order total is: ', total);


//EXERCISE 2
const amounts = [61.00, 52.25, 112.99, 5.00]; 

let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is: ', total);

//EXERCISE 3
const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
  console.log(chorus);
}
console.log("Until the sun comes up!");

//EXERCISE 4

var laugh = function (num){
  var sound ="";
  for ( i=0; i < num; i++){
    sound = sound + "ha";
  }
return sound;
}

console.log(laugh(10));

// LIST INRIDIENTS USING FOR LOOP

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

for (let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i])
}

//LIST INGRIDIENTS USING WHILE LOOP

let i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}

//LIST INGRIDIENTS IN A REVERSE ORDER
for (let i = ingredients.length - 1; i >= 0; i--){
  console.log(ingredients[i])
}

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
console.log(finalPosition(moves));