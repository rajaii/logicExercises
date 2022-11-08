//  from leetcode medium :https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

// var twoSum = function(numbers, target) {
//     //double loop checking
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) {
//                 return [i+1, j+1];
//             }
//         }
//     }
    
    
// };

var twoSum = function(numbers, target) {
  if (numbers.length === 2) {
      return [1,2];
  }
  
  //set max and min pointers
  let i1 = 0;
  let i2 = numbers.length - 1;
  
  while (i2 >= i1) {
      if (target - numbers[i2] >= numbers[i1]) {
          if ((target - numbers[i1]) === numbers[i2]) {
              return [i1 + 1, i2 + 1];
          } 
          
          if (target - numbers[i1] > numbers[i2]) {
              i1 += 1;
              continue;
          }
      } else {
          i2 -= 1;
          continue
      }
  }
  
};

//PSEUDO:
//solution 1:
//brute force:
//double loop numbers j = i + 1 
//checking the sum 
//if sums add up push into retArr i+ 1 j+1; break and return retArr
//allpassed but took too long o(n^2)

//refactor:
//set max, min
//check target - max and if this is a positive number we can check target - min moving up until we find it
//if we don't decrement max and redo
//if not move max down one and recheck

//NEETCODE DO AGAIN