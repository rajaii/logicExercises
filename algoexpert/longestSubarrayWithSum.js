//HARD

//first sln o(n ^ 2) time o(1) space
function longestSubarrayWithSum(array, targetSum) {
  let longestA = [];
  let longest = 0;

  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    if (sum === targetSum && 1 > longest) {
      longest = 1;
      longestA = [i, i];
      continue;
    }
    for (let j = i + 1; j < array.length; j++) {
      if (sum > targetSum) {
        break;
      }

      sum += array[j];
      if (sum === targetSum && j - i > longest) {
        longest = j - i;
        longestA = [i, j];
        continue;
      }
    }
  }

  return longestA;
}
