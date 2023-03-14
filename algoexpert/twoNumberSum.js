//Easy:

//Brute force solution 1 o(n^2) time o(1) space:

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }

  return [];
  
}

//solution 2 o(n) (technically o(2n)) time and o(n) space

function twoNumberSum(array, targetSum) {
  //make an object of the form {array[i]: index}
  const diffs = {};

  for (let i = 0; i < array.length; i++) {
    diffs[array[i]] = i;
  }

  //loop and if object[targetSum - array[i]] !== i] return [array[i], targetSum - array[i]]
  for (let i = 0; i < array.length; i++) {
    if (diffs[targetSum - array[i]] && diffs[targetSum - array[i]] !== i) {
      return [array[i], targetSum - array[i]];
    }
  }
  
  return [];
}

//solution 2 o(n) time and space but cleaner and only one loop

function twoNumberSum(array, targetSum) {
  const nums = new Set();
  for (let i = 0; i < array.length; i++) {
    if (nums.has(targetSum - array[i])) {
      return [array[i], targetSum - array[i]];
    }

    nums.add(array[i]);
  }

  return [];
}
