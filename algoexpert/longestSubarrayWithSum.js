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

//o(n) time o(1) space:
function longestSubarrayWithSum(array, targetSum) {
  let left = 0;
  let right = 0;
  let currentSum = array[0];
  let longest = [];

  while (right < array.length && left < array.length) {
    if (currentSum < targetSum) {
      right += 1;
      currentSum += array[right];
      continue;
    } else if (currentSum > targetSum) {
      currentSum -= array[left];
      left += 1;
      continue;
    } else {
      if (!longest.length) {
        longest[0] = left;
        longest[1] = right;
        right += 1;
        currentSum += array[right];
        continue;
      } else if (longest[1] - longest[0] < right - left) {
        longest[0] = left;
        longest[1] = right;
        right += 1;
        currentSum += array[right];
        continue;
      } else {
        right += 1;
        currentSum += array[right];
        continue;
      }
    }
  }

  return longest;
}
