//Hard: second one ever, and first hard one solved without looking at hints/video!

//first solution o(log n) time o(n) space:

function largestRange(array) {
  if (array.length === 1) {
    return [array[0], array[0]]
  }
  //sort the array and set possibles in memory
  array.sort((a,b) => a - b);
  let largest = [];
  let right = 1;
  let left = 0;

  //loop while right < length of array and check if is a possible range
  while (right < array.length) {
    let temp = [];
    temp.push(array[left]);
    let started = false;
    if (array[right] === array[left] + 1) {
      started = true;
    }
    
    while(started && (array[right] === array[left] + 1 || array[left] === array[right])) {
      temp.push(array[right])
      right += 1
      left += 1
      continue;
    }

    if (temp.length > 1 && temp.length > largest.length) {
      largest = temp;
    }

    left += 1; 
    right += 1;
  }
 

  return [largest[0], largest[largest.length - 1]];
}