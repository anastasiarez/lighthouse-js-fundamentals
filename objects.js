// var umbrella = {
//   colour: "pink",
//   isOpen: false,
//   open: function () {
//     if (umbrella.isOpen === true) {
//       return "The umbrella is already opened!";
//     } else {
//       umbrella.isOpen = true;
//       return "Julia opens the umbrella!";
//     }
//   }
// }

// var umbrella = {
//   colour: "pink",
//   isOpen: true,
//   close: function () {
//     if (umbrella.isOpen === true) {
//       umbrella.isOpen === false;
//       return "Julia is closing the umbrella!";
//     } else {
//       return "The umbrella is already closed!"
//     }
//   }
// }

// //

// var brother = {
//   name: "Oleg",
//   age: 28,
//   parents: ["Mykola", "Yuliia"],
//   siblings: ["Anastasia"],
//   favoriteColour: "green",
//   pets: true,
//   walksDog: function Mavka() {
//     return "Oleg walks Mavka!"
//   }
// }

// brother.walksDog();

// OPTION 1 - My Version 

var facebookProfile = {
  name: "Anastasia",
  friends: 50,
  messages: ["Hello!", "How are you?", "Happy Birthday!"],

  postMessage: function (message) {
    if (message.lenght > 0) {
      facebookProfile.messages.push(message)
    }; // mistake: our `postMessage()` method doesn't `push()` new messages onto the `messages` array
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