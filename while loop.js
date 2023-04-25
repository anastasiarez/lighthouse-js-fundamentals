//exercise 1
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

//exercise 2

let numbers = 100;

while (numbers <= 200) {
  if (numbers % 3 === 0 && numbers % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (numbers % 3 === 0) {
    console.log("Loopy");
  } else if (numbers % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(numbers);
  }
  numbers = numbers + 1;
}

//exercise 3

var num = 60;

while (num >= 1) {
  console.log("T-" + num + " seconds");

  if (num === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (num === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (num === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (num === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (num === 6) {
    console.log("Main engine start");
  } else if (num === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  }

  num = num - 1;
}

//exercise 4

const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}

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