// from leetcode medium: https://leetcode.com/problems/min-stack

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
  this.minStack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.minStack[this.minStack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return Math.min(...this.minStack);
};