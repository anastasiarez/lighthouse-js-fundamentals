//ICECREAM .concat

const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
const newArray = iceCreamFlavours.concat(["root beer"]) //.CONCAT CREATES NEW ARRAY WITHOUT MODIFYING EXISTING ARRAY

console.log(newArray)
console.log(newArray[0])
//console.log(iceCreamFlavours[iceCreamFlavours.length-1])
console.log(newArray.at(-1)) //NEW METHOD INSTEAD OF .LENGTH 
console.log(newArray.length)

//STATIONS
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Shyroke school', 100, 'school']
];

function chooseStations(stations) {
  const goodStations = []

  for (const station of stations) {
    const capacity = station[1]

    if (capacity >= 20) {

      const type = station[2]

      if (type === "school" || type === "community centre") {
        goodStations.push(station[0])
      }
    }
  }
  return goodStations
}

console.log(chooseStations(stations))

//DONUTS

var donuts = ["glazed", "chocolate frosted", "boston cream", "powdered", "sprinkled", "maple", "coconut", "jelly"];

donuts[2] = "cinnamon twist";
donuts[4] = "salted caramel";
donuts[5] = "shortcake eclair";

console.log(donuts)

//CHANGE ELEMENTS IN THE ARRAY

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
for (var index = 0; index < prices.length; index++) {
  //change the value of first element
  if (index === 0) {
    prices[index] = 11;
  }
  //change the value of third element
  else if (index === 2) {
    prices[index] = 33;
  }
  //change the value of seventh element
  else if (index === 6) {
    prices[index] = 77;
  }
}
console.log(prices);

//.SPLICE - SPECIFY INDEX, ADD NEW ELEMENTS TO THE ARRAY, DELETE ELEMENTS
var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
//index 2 "Blackberry", remove 2 elements "Blackberry" & "Blue", add "Yellow", "Green", "Purple". Push "Blue" in the end
rainbow.splice(2, 2, "Yellow", "Green", "Purple");
rainbow.push("Blue")

console.log(rainbow)

//DONUTS OPTION 1
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

for (var i = 0; i < donuts.length; i++) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
}

console.log(donuts)

//DONUTS OPTION 2 .forEach

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function printDonuts(newType) {
  newType += " hole";
  newType = newType.toUpperCase();
  console.log(newType)
});

//FIND OUT INDEX NUMBER IN THE ARRAY
words = ["cat", "in", "hat"];
words.forEach(function (element, index) {
  console.log(element, index);
});

//
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

test.forEach(function (item, index, array) {
  if (item % 3 === 0) {
    array[index] = item + 100;
  }
});

console.log(test);

//

test.forEach(function (item, index) {
  if (item % 3 === 0) {
    test[index] = test[index] + 100;
  }
});
console.log(test);

//
var myArray = [1, 2, 3];
var newArray = myArray.map(function add100(element) {
  element = element + 100;
  return element;
})
console.log(newArray)

//
var donuts = ['jelly donut', 'choc donut', 'honey donut'];

var newDonuts = donuts.map(function modifyDonuts(item) {
  item += " holes";
  item = item.toUpperCase();
  return item;
})
console.log(newDonuts);

//
var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

var totals = bills.map(function add15(tips) {
  tips = tips * 1.15
  return Number(tips.toFixed(2))
})

console.log(totals)

//
var donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}

//
var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (var rows = 0; rows < numbers.length; rows++) {
  for (var columns = 0; columns < numbers[rows].length; columns++) {
    if (numbers[rows][columns] % 2 === 0)
      numbers[rows][columns] = "even";
    else
      numbers[rows][columns] = "odd";
  }
}

console.log(numbers)

//
const director = "Steven Spielberg";
const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];
films[2] = "Jurassic Park";
films;
films.push("A.I.");
films;
director + " is the director of " + films.length + " films";

//
const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

//

function range(start, end, step) {
  if (start === undefined || end === undefined || step === undefined || start > end || step === 0 || step < 0) {
    return [];
}

const result = [];
for (let i = start; i <= end; i += step) {
  result.push(i);
}
return result;}

//

function lastIndexOf(array, value) {
    // Iterate over the array backwards
  for (let i = array.length - 1; i >= 0; i--) {
        // If the current element is equal to the value, return its index
    if (array[i] === value) {
      return i;
    }
  }
    // If the value is not found, return -1
  return -1
}



//

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));

function concat(array1, array2) {
  return array1.concat(array2);
}

console.log(concat([1, 2, 3], [4, 5, 6]))