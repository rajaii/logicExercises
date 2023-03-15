//medium

//brute force o(n^3) time o(n) space:
function threeNumberSum(array, targetSum) {
  array.sort((a,b) => a-b);
  let sums = [];
  for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === targetSum) {
          sums.push([array[i], array[j], array[k]]);
        }
      }
    }
  }
  return sums;
};

//sln 2 with pointers op(n^2) time o(n) space:

function threeNumberSum(array, targetSum) {
  array.sort((a,b) => a - b);
 let sums = [];
 for (let i = 0; i < array.length - 2; i++) {
   let left = i + 1;
   let right = array.length - 1;
   while (left < right) {
     if (array[i] + array[left] + array[right] === targetSum) {
       sums.push([array[i], array[left], array[right]]);
       right -= 1;
       left += 1;
       continue;
     }

     if (array[i] + array[left] + array[right] < targetSum) {
       left += 1;
       continue;
     }

     if (array[i] + array[left] + array[right] > targetSum) {
       right -= 1;
       continue;
     }
   }
 }

 
 return sums;
}

