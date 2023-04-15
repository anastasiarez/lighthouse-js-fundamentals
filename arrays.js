//ICECREAM

const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
const newArray = iceCreamFlavours.concat(["root beer"]) //.CONCAT CREATES NEW ARRAY WITHOUT MODIFYING EXISTING ARRAY

console.log(newArray)
console.log(newArray[0])
//console.log(iceCreamFlavours[iceCreamFlavours.length-1])
console.log(newArray.at(-1)) //NEW METHOD INSTEAD OD .LENGTH 
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