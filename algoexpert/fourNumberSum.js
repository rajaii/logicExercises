//HARD

function fourNumberSum(array, target) {
  //set the memory to use
  const quads = [];
  const pairs = {};

  //iterate forward from i checking and forward to i checking
  for (let i = 0; i < array.length; i++) {
    //iterate from i
    for (let fromI = i + 1; fromI < array.length; fromI++) {
      if (pairs[target - (array[i] + array[fromI])]) {
        for (
          let j = 0;
          j < pairs[target - (array[i] + array[fromI])].length;
          j++
        ) {
          quads.push([
            array[i],
            array[fromI],
            pairs[target - (array[i] + array[fromI])][j][0],
            pairs[target - (array[i] + array[fromI])][j][1],
          ]);
        }
      }
    }

    //iterate to i
    for (let toI = 0; toI < i; toI++) {
      if (pairs[array[i] + array[toI]]) {
        pairs[array[i] + array[toI]].push([array[i], array[toI]]);
      } else {
        pairs[array[i] + array[toI]] = [[array[i], array[toI]]];
      }
    }
  }

  return quads;
}
