//  from leetcode easy: https://leetcode.com/problems/best-time-to-buy-and-sell-stock


//  Brute force:
var maxProfit = function(prices) {
  //set max 
  let max = 0;
  
  //double loop checking if prices[j] - prices[i] > max and set max if so
  for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
          if (prices[j] - prices[i] > max) {
              max = prices[j] - prices[i];
          }
      }
  }
  
  return max;
};

//PSEUDO:
//brute force:
//set max = 0;
//double loop j = i + 1;
//check if prices[j] - prices[i] > max and set max if so

//out of loop return max

//  refactor aftert study to use pointers

var maxProfit = function(prices) {
  //set max 
  let max = 0;
  let left = 0;
  let right = 1;
  
  //double loop checking if prices[j] - prices[i] > max and set max if so
  while (right < prices.length) {
      if (prices[right] < prices[left]) {
          left = right;
          right += 1;
      } else {
          if (prices[right] - prices[left] > max) {
              max = prices[right] - prices[left]; 
              right += 1;
          } else {
              right += 1;
          }
      }
      
      
  }
  
  return max;
};