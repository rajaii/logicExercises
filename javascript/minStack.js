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

//  Refactor to have the o(1) getMin met

MinStack.prototype.push = function(val) {
  if (val <= this.min) {
      this.min = val;
      this.mins.push(val);
  }
  this.minStack.push(val);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if (this.minStack[this.minStack.length - 1] === this.min) {
      this.mins.pop();
      if (this.mins[this.mins.length - 1] === undefined) {
          this.min = Infinity
      } else {
          this.min = this.mins[this.mins.length - 1];
      }   
  }
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
  return this.mins[this.mins.length - 1];
};