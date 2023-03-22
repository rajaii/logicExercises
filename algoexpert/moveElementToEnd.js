//first solution needed hints but got it after a few o(n) time o(1) space

function moveElementToEnd(array, toMove) {
  //set pointers at beginning and end of array
  let left = 0;
  let right = array.length - 1;
  
  //loop while pointers !== and swap toMoves from left to right as they occur
  while (left < right) {
    if (array[right] === toMove) {
      right -= 1;
      continue;
    }

    if (array[left] === toMove) {
      array[left] = array[right];
      array[right] = toMove;
      left += 1;
      right -= 1
      continue;
    }

    if (array[left] !== toMove) {
      left += 1;
    }
    
  }

  return array
 
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

//PSEUDO:
//pointers at beginning and end of array
//if right === toMove 
  //right -=  1
  //continue;
//if left === toMove
  //swap with left
  //right -= 1
  //left += 1

//if left !== toMove
  //left += 1;

// out of loop return array


//Second solution just using firsts flow to practice recursion and classes 

function moveElementToEnd(array, toMove) {
  class Solution {
    constructor () {
      this.array = array;
      this.toMove = toMove;
    }

    moveElementHelper = (left, right) => {
      if (right <= left) {
        return this.array;
      }

      if (this.array[right] === this.toMove) {
        right -= 1;
        return this.moveElementHelper(left, right);
      }

      if (this.array[left] === this.toMove) {
        this.array[left] = this.array[right];
        this.array[right] = this.toMove;
        left += 1;
        right -= 1;
        return this.moveElementHelper(left, right);
      }

      if (this.array[left] !== this.toMove) {
        left += 1;
        return this.moveElementHelper(left, right);
      }
      
    }

    moveElement = () => {
      let left = 0;
      let right = this.array.length - 1;
      return this.moveElementHelper(left, right);
    }
  }

  return new Solution().moveElement();
}


