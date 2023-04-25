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

donuts.forEach(function(donut){
    // donut represents a single element of donuts array
    // donut is an object, therefore you can access its properties using a dot notation
    console.log(donut.type+" donuts cost $"+donut.cost+" each");
})

//GARBAGE

function smartGarbage(trash, bins) {
  if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'compost') {
    bins.compost += 1; // I dont understand how we can write bins.compost as if we reffer to an object. We dont have it anywhere. But c.log will return an object. How is it?
  }
  return bins;
}

console.log(smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 }));


//CARS

function carPassing(cars, speed) {
  const newCar = {
    time: Date.now(),
    speed: speed
  };
  cars.push(newCar);
  return cars;
}
// In this implementation, we create a new object with the time property set to the current time using Date.now(), and the speed property set to the speed argument passed to the function. We then add this new object to the cars array (HOW DOES IT KNOW THAT CARS IS AN ARRAY?) using the push() method, and return the modified array.

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

[
  { time: 1568329654807, speed: 40 },
  { time: 1568329821632, speed: 42 },
  { time: 1568331115463, speed: 35 },
  { time: 1682213282060, speed: 38 } - HOW IS THIS HERE??

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