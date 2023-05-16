// function smartGarbage(trash, bins) {
//   if (trash === 'waste') {
//     bins.waste += 1;
//   } else if (trash === 'recycling') {
//     bins.recycling += 1;
//   } else if (trash === 'compost') {
//     bins.compost += 1;
//   }
//   return bins;
// }

// smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

// //

// function loopyLighthouse(range, multiples, words) {
//   const start = range[0];
//   const end = range[1];

//   for (let index = start; index <= end; index++) {
//     const firstMultiplier = multiples[0];
//     const secondMultiplies = multiples[1];

//     if (index % firstMultiplier === 0 && index % secondMultiplies === 0) {
//       console.log(words[0] + words[1]);

//     } else if (index % firstMultiplier === 0) {
//       console.log(words[0]);
//     } else if (index % secondMultiplies === 0) {
//       console.log(words[1]);
//     } else {
//       console.log(index);
//     }
//   }
// }

// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"])

// //

// function merge(array1, array2) {
//   const mergedArray = array1.concat(array2);
//   mergedArray.sort(function (a, b) {
//     return a - b
//   });
//   return mergedArray;
// }

// console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));

// //

// const sumLargestNumbers = function(data) {
//   let largest = data[0];
//   let secondLargest = data[1];

//   // Ensure largest is actually the largest of the two
//   if (secondLargest > largest) {
//     let temp = largest;
//     largest = secondLargest;
//     secondLargest = temp;
//   }

//   for (let i = 2; i < data.length; i++) {
//     if (data[i] > largest) {
//       secondLargest = largest;
//       largest = data[i];
//     } else if (data[i] > secondLargest) {
//       secondLargest = data[i];
//     }
//   }

//   return largest + secondLargest;
// };

// console.log(sumLargestNumbers([1, 10, 50, 30])); 


//Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

// const conditionalSum = function (values, condition) {
//   let evenValues = 0;
//   let oddValues = 0;

//   for (i = 0; i < values.length; i++) {
//     if (values[i] % 2 === 0 && condition === "even") {
//       evenValues += values[i];
//     } else if (values[i] % 2 !== 0 && condition === "odd") {
//       oddValues += values[i];
//     }
//   }

//   if (condition === "even") {
//     return evenValues;
//   } else if (condition === "odd") {
//     return oddValues;
//   } else {
//     return 0;
//   }
// };

//console.log(conditionalSum([1, 2, 3, 4, 5], "even"));

//count the number of vowels that appear in a given string

// const numberOfVowels = function (data) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   var vowelsCount = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (vowels.includes(data[i])) {
//       vowelsCount++;
//     }
//   }
//   return vowelsCount;
// };

// console.log(numberOfVowels("orange"));

//Create a function named instructorWithLongestName that will receive an array of instructor objects, and return the object that has the longest name. If there are two instructors with the longest name, return the first one.

// const longestName = function (instructors) {
//   let longest = instructors[0];

//   for (let i = 0; i < instructors.length; i++) {
//     if (instructors[i].name.length > longest.name.length) {
//       longest = instructors[i];
//     }
//   }
//   return longest;
// };

// console.log((longestName)([
//   { name: "Samuel", course: "iOS" },
//   { name: "Jerem", course: "iOS" },
//   { name: "Jere", course: "Web" },
//   { name: "Donald", course: "Web" }
// ]));

//output {name: "Jeremiah", course: "Web"}

//Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. 

// const urlEncode = function (text) {
//   // Use the replace() method to replace all empty spaces with '%20'
//   let newText = text.replace(/ /g, '%20');

//   return newText;
// };

// console.log(urlEncode("Lighthouse Labs"));
// console.log(urlEncode(" Lighthouse Labs "));

//If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.

// const urlEncode = function(text) {
//   // Remove whitespace at beginning and end of string
//   text = text.trim();

//   // Replace whitespace between words with %20
//   text = text.replace(/\s+/g, '%20');

//   return text;
// };

// console.log(urlEncode("Lighthouse Labs"));
// console.log(urlEncode(" Lighthouse Labs "));
// console.log(urlEncode("blue is greener than purple for sure"));

//DO NOT USE String.prototype.replace

// const urlEncode = function(text) {
//   let encoded = "";
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === " ") {
//       if (i === 0 || i === text.length - 1) {
//         continue;
//       }
//       encoded += "%20";
//     } else {
//       encoded += text[i];
//     }
//   }
//   return encoded;
// };

// console.log(urlEncode("Lighthouse Labs"));
// console.log(urlEncode(" Lighthouse Labs "));
// console.log(urlEncode("blue is greener than purple for sure"));

//write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.

// const whereCanIPark = function (spots, vehicle) {
//   for (let x = 0; x < spots.length; x++) {
//     for (let y = 0; y < spots[x].length; y++) {
//       const spot = spots[x][y];
//       if (vehicle === "regular" && spot === "R") {
//         return [y, x];
//       } else if (vehicle === "small" && (spot === "R" || spot === "S")) {
//         return [y, x];
//       } else if (vehicle === "motorcycle" && (spot === "R" || spot === "S" || spot === "M")) {
//         return [y, x];
//       }
//     }
//   }
//   return false;
// };

// console.log(whereCanIPark(
//   [
//     ['s', 's', 's', 'S', 'R', 'M'],
//     ['s', 'M', 's', 'S', 'r', 'M'],
//     ['s', 'M', 's', 'S', 'r', 'm'],
//     ['S', 'r', 's', 'm', 'r', 'M'],
//     ['S', 'r', 's', 'm', 'r', 'M'],
//     ['S', 'r', 'S', 'M', 'M', 'S']
//   ],
//   'regular'
// ));

// console.log(whereCanIPark(
//   [
//     ['M', 'M', 'M', 'M'],
//     ['M', 's', 'M', 'M'],
//     ['M', 'M', 'M', 'M'],
//     ['M', 'M', 'r', 'M']
//   ],
//   'small'
// ));

// console.log(whereCanIPark(
//   [
//     ['s', 's', 's', 's', 's', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['s', 'm', 's', 'S', 'r', 's'],
//     ['S', 'r', 's', 'm', 'r', 's'],
//     ['S', 'r', 's', 'm', 'R', 's'],
//     ['S', 'r', 'S', 'M', 'm', 'S']
//   ],
//   'motorcycle'
//   ))

// POLUTION

// const checkAir = function (samples, threshold) {
//   let clean = 0;
//   let dirty = 0;
//   let calc;
//   for (let i = 0; i < samples.length; i++)
//     if (samples[i] === 'dirty') {
//       dirty++;
//       calc = dirty / samples.length;
//     }
//   if (calc > threshold) {
//     return "Polluted"
//   } else {
//     return "Clean"
//   }
// };

// console.log(checkAir(
//   ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
//   0.1
// ))

//REPEAT NUMBERS
// const repeatNumbers = function(data) {
//   let output = "";
  
// for (let i = 0; i < data.length; i++){
//   let value = data[i][0];
//   let count = data[i][1];
//   output += String(value).repeat(count); //output += means output=output+String(value); The String(value) method is used to ensure that any numeric values are converted to strings before concatenating them.
//   if (i < data.length - 1){
//     output += ", ";
//   }
// }
// return output;
// };

// console.log(repeatNumbers([[1, 10]]));
// console.log(repeatNumbers([[1, 2], [2, 3]]));

// CAMEL CASE

// function camelCase(input) {
//   let words = input.replace(/[^a-zA-Z0-9]/g, ' ').split(' '); //Remove any spaces or special characters from the string. Split the string into an array of words.
//   for (let i = 1; i < words.length; i++) { // i = 1 because we need to start from the second word in the string, 1 is its index
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1); //.substring(1) is called on the string words[i] and returns a new string that starts at the second character (index 1) of the original string words[i] and continues to the end of the string.
//   }
//   return words.join(''); // join all the elements of an array into a single string.
// }


// console.log(camelCase("this is a string"));
// //thisIsAString

//Multiplication Table
//To create a square multiplication table, we need to multiply each number in the range from 1 to maxValue with every other number in that same range. We can accomplish this by using two nested loops, where the outer loop iterates through the range of numbers from 1 to maxValue, and the inner loop iterates through the same range, multiplying the current outer loop value by each inner loop value.

const multiplicationTable = function(maxValue) {
  let table = '';
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      table += (i * j) + ' ';
    }
    table += '\n';
  }
  return table;
};
