//  from leetcode medium: //https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
  //set the memory needed
  let max = 0;
  let left = 0; 
  let right = height.length - 1;
  // let maxCur = Math.max(height[left], height[right])
  
  //double loop and check water held
  while (left < right) {
      if ((right - left) * Math.min(height[left], height[right]) > max) {
          max = (right - left) * Math.min(height[left], height[right]);
      }
      
      if (height[right] < height[left]) {
          right -= 1;
          continue;
      }
      
      left += 1;
      
  }
  
  return max;
};

//PSEUDO:
//set max = 0;
//loop height
//loop again j = i + 1
//if ((j - i) * Math.min(height[j], height[i]) > max) {
//max = (j - i) * Math.min(height[j], height[i]) > max
//}

//out of loop:
//return max

//Refactor to o(n) time issues with above at 55th test

//use left = 0 and right = height.length - 1 pointer
//set max = 0;
//while (left < right):
//increment max according to the condition
//see which iteration of left or right gives a higher max
    //iterate accordingly
    //check against max and increment that accordingly
    //run all the way

//out of loop:
//return max