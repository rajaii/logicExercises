



//====> watch video and try again
//https://leetcode.com/problems/min-stack

//next round neetcode
//==> redo and study on more ie. could not get optimized on own and took a number of tries on the brute force
//Arrays and hashing:
//https://leetcode.com/problems/product-of-array-except-self
//https://leetcode.com/problems/longest-consecutive-sequence/

//Two pointers
//https://leetcode.com/problems/container-with-most-water
//https://leetcode.com/problems/3sum/

//Sliding Window:
//https://leetcode.com/problems/longest-substring-without-repeating-characters/
//https://leetcode.com/problems/longest-repeating-character-replacement/ Look at his code and try to do the o(n)(not o(n*26)) case

//Stack
//https://leetcode.com/problems/min-stack

var MinStack = function() {
  this.minStack = [];
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.minStack.push(val);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  
};

const a = new MinStack();
a.push("x");
console.log(a.minStack)


const xl = `${Date.now()}${`${Math.random()}`.slice(-6)}`
console.log(xl)