var umbrella = {
  colour: "pink",
  isOpen: false,
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  }
}

var umbrella = {
  colour: "pink",
  isOpen: true,
  close: function () {
    if (umbrella.isOpen === true) {
      umbrella.isOpen === false;
      return "Julia is closing the umbrella!";
    } else {
      return "The umbrella is already closed!"
    }
  }
}

//

var brother = {
  name: "Oleg",
  age: 28,
  parents: ["Mykola", "Yuliia"],
  siblings: ["Anastasia"],
  favoriteColour: "green",
  pets: true,
  walksDog: function Mavka() {
    return "Oleg walks Mavka!"
  }
}

brother.walksDog();

//OPTION 1 - My Version 

var facebookProfile = {
  name: "Anastasia",
  friends: 50,
  messages: ["Hello!", "How are you?", "Happy Birthday!"],

  postMessage: function (message) {
    if (message.lenght > 0) {
      facebookProfile.messages.push(message)
    }; // mistake: Your `postMessage()` method doesn't `push()` new messages onto the `messages` array
  },

  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1)
  },

  addFriend: function (newFriends) {
    if (newFriends > 0) {
      facebookProfile.friends += newFriends;
    } //mistake: Your `addFriend()` method doesn't increment the `friends` variable
  },

  removeFriend: function (badFriend) {
    if (badFriend > 0 && facebookProfile.friends >= badFriend) {
      facebookProfile.friends -= badFriend;
    } //mistake: Your `removeFriend()` method doesn't decrement the `friends` variable
  }
};

facebookProfile.postMessage("Hi!");
console.log(facebookProfile.messages)


// OPTION 2 - Version from the bootcamp

var facebookProfile = {
  name: "Anastasia",
  friends: 25,
  messages: ["Message 1", "Message 2", "Message 3", "Message 4"],

  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },

  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },

  addFriend: function () {
    facebookProfile.friends = facebookProfile.friends + 1;
  },

  removeFriend: function () {
    if (facebookProfile.friends > 0)
      facebookProfile.friends = facebookProfile.friends - 1;
  }
};
console.log(facebookProfile.messages)

//

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function (donut) {
  // donut represents a single element of donuts array
  // donut is an object, therefore you can access its properties using a dot notation
  console.log(donut.type + " donuts cost $" + donut.cost + " each");
})

//GARBAGE

function smartGarbage(trash, bins) {
  if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'compost') {
    bins.compost += 1; 
  }
  return bins;
}

console.log(smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 }));


//CARS. Option 1

function carPassing(cars, speed) {
  const newCar = {
    time: Date.now(),
    speed: speed
  };
  cars.push(newCar);
  return cars;
}
// In this implementation, we create a new object with the time property set to the current time using Date.now(), and the speed property set to the speed argument passed to the function. We then add this new object to the cars array  using the push() method, and return the modified array.

//CARS. Option 2

function carPassing(cars, speed) {
  const newCar = {}

  newCar.time = Date.now();
  newCar.speed = speed;

  cars.push(newCar);

  return cars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

console.log(carPassing(cars, speed));

//VEGGIES OPTION 1

function judgeVegetable(vegetables, metric) {
  let bestVeggie = '';
  let bestValue = -1;

  for (let i = 0; i < vegetables.length; i++) {
    const veggie = vegetables[i];
    const value = veggie[metric];

    if (value > bestValue) {
      bestValue = value;
      bestVeggie = veggie.submitter;
    }
  }

  return bestVeggie;
}

// VEGGIES OPTION 2

const judgeVegetable = (vegetables, metric) => {
  let highestScore = 0;
  let winner = '';

  for (let vegetable of vegetables) {
    if (vegetable[metric] > highestScore) {
      highestScore = vegetable[metric];
      winner = vegetable.submitter;
    }
  }

  return winner;
}

// VWGGIES OPTION 3

function judgeVegetable(vegetables, metric) {
  let max = 0
  let result

  for (const object of vegetables) {
    const score = object[metric]
    const person = object.submitter

    if (score > max) {
      max = score
      result = person
    }
  }

  return result
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))

//

function merge(array1, array2) {
  // const [ 4, 5, 6, 1, 2, 3, 4 ] = [ 4, 5, 6 ].concat([ 1, 2, 3, 4 ])

  function sortNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber
  }
  // [ 4, 5, 6, 1, 2, 3, 4 ].sort(sortNumbers)
  const mergedArray = array1.concat(array2);
  mergedArray.sort(sortNumbers);

  return mergedArray;
}

//

function merge(array1, array2) {
  const mergedArray = array1.concat(array2);
  mergedArray.sort(function (a, b) {
    return a - b
  });

  return mergedArray;
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]));

//KATAS

function sumLargest2Numbers(array) {
  let firstLargestNumber = array[0];
  let secondLargestNumber = array[1];

  if (secondLargestNumber > firstLargestNumber) {
    let temporary = firstLargestNumber;
    firstLargestNumber = secondLargestNumber;
    secondLargestNumber = temporary;
  }

  for (let i = 2; i < array.lenght; i++) {
    if (array[i] > firstLargestNumber) {

      secondLargestNumber = firstLargestNumber;
      firstLargestNumber = array[i];

    } else if (array[i] > secondLargestNumber) {
      secondLargestNumber = array[i];
    }

    return firstLargestNumber + secondLargestNumber;
  }
}


console.log(sumLargestNumbers([1, 10])); // Output: 11

//For each number in the array, compare it to the largest variable. If the current number is greater than largest, then update largest to be that number, and update secondLargest to be the previous value of largest.


//If the current number is not greater than largest, but it is greater than secondLargest, then update secondLargest to be that number. After the loop has finished, return the sum of largest and secondLargest.