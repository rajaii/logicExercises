// from leetcode meduim: https://leetcode.com/problems/product-of-array-except-self

var productExceptSelf = function(nums) {
  //  set productForwards and productBackwards objects to be of the form {i: product at that point}, {i: product at that point} respectively
  const productForward = {
      '0': nums[0],
  };
  const productBackward = {};
  productBackward[nums.length - 1] = nums[nums.length - 1];
  
  let acc = nums[0];
  for (let i = 1; i < nums.length; i++) {  
      productForward[i] = acc; 
      acc *= nums[i];
  }
  
  acc = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {    
      productBackward[i] = acc; 
      acc *= nums[i];
  }
  
  //loop nums and push into ret productForward[i] * productBackward[i]
  const ret = [];
  for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
          ret.push(productBackward[i]);
          continue;
      }
      
      if (i === nums.length - 1) {
          ret.push(productForward[i]);
          continue;
      }
      ret.push(productForward[i] * productBackward[i])
  }
  
  return ret;
};

//PSEUDO:


//run nums.reduce and push into productForward = {i: product at that point}

//loop nums backwards productBackwards = {i: product at that point}

//set ret
//loop nums and push into ret productForwards[i] * productBackwards[i]

//return ret;

//refactor after study
var productExceptSelf = function(nums) {
  //  make prefix and postfix
  const ret = [];
  ret[0] = 1;
  let cur = 1;
  for (let i = 0; i < nums.length; i++) {
      ret[i] = cur;
       cur *= nums[i];
  }
  
  cur = 1;
  for (let i = ret.length - 1; i >= 0; i--) {
      ret[i] *= cur;
      cur *= nums[i];
  }
   
  return ret;
};