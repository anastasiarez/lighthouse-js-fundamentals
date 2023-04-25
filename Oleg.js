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

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

//

function loopyLighthouse(range, multiples, words) {
  const start = range[0];
  const end = range[1];

  for (let index = start; index <= end; index++) {
    const firstMultiplier = multiples[0];
    const secondMultiplies = multiples[1];

    if (index % firstMultiplier === 0 && index % secondMultiplies === 0) {
      console.log(words[0] + words[1]);

    } else if (index % firstMultiplier === 0) {
      console.log(words[0]);
    } else if (index % secondMultiplies === 0) {
      console.log(words[1]);
    } else {
      console.log(index);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"])

//

function merge(array1, array2) {
  const mergedArray = array1.concat(array2);
  mergedArray.sort(function (a, b) {
    return a - b
  });
  return mergedArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));