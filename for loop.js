//EXERCISE 1
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