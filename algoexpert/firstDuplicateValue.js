//MEDIUM:

//o(n ^ 2) time o(n) space
function firstDuplicateValue(array) {
  //keep track of indexs
  const indexs = [];
  
  //double loop pushing into indexs j if array[i] === array[j]
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === array[i]) {
        indexs.push(j);
        break;
      }
    }
  }

  return array[Math.min(...indexs)] || -1;
}

//o(n) time o(n) space:
function firstDuplicateValue(array) {
  //make the array to keep track of i's and set to tag nums
  const indexs = [];
  const nums = new Set();

  //loop array adding to set or indexs if already in set
  for (let i = 0; i < array.length; i++) {
    if (!nums.has(array[i])) {
      nums.add(array[i])
    } else {
      indexs.push(i);
    }
  }
  
  return array[Math.min(...indexs)] || -1;
}