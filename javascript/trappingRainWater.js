//  from leetcode hard https://leetcode.com/problems/trapping-rain-water/

var trap = function(height) {
  const maxLeft = [0];
  const maxRight = []; 
  maxRight.length = height.length;
  maxRight[maxRight.length - 1] = 0;
  const minLR = [0];
  minLR.length = height.length;
  minLR[minLR.length - 1] = 0;
  let water = 0;
  
  for (let i = 1; i < height.length; i++) {
     maxLeft[i] = Math.max(height[i - 1], maxLeft[i - 1]);
  }
  
  for (let i = height.length - 2; i >= 0; i--) {
      maxRight[i] = Math.max(height[i + 1], maxRight[i + 1]);
  }
  
  for (let i = 1; i < height.length - 1; i++) {
      minLR[i] = Math.min(maxRight[i], maxLeft[i]);
  }
  
  for (let i = 0; i < height.length; i++) {
      if (minLR[i] - height[i] > 0) {
          water += minLR[i] - height[i];
      }
  }
  
  return water;
  
};