//Easy:

//O(n) time o(1) space my solution using stack (pseudo stack):

function isValidSubsequence(array, sequence) {
  for (let i = array.length - 1; i > -1; i--) {
    if (array[i] === sequence[sequence.length - 1]) {
      sequence.pop();
    }

    if (!sequence.length) {
      return true;
    }
  }

  return false;
}

//o(n) time o(1)  space solution using pointers from video:

function isValidSubsequence(array, sequence) {
  let cur = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[cur]) {
      cur += 1;
    }

    if (cur === sequence.length) {
      return true;
    }
  }

  return false;
}

//solution to practivce classes and recursion o(n) time o(1) space:
function isValidSubsequence(array, sequence) {
  class Solution {
    constructor(array, stack) {
      this.stack = sequence;
      this.array = array;
    }

    findIfValidHelper (array, stack) {
      if (array.length === 0) {
        if (stack.length) {
          return false;
        }
        return true;
      }

      if (array.pop() === stack[stack.length - 1]) {
        stack.pop()
      }

      return this.findIfValidHelper(array, stack);
    }

    isValid () {
      return this.findIfValidHelper(this.array, this.stack);
    }
  }
  const solution = new Solution(array, sequence);
  return solution.isValid();
}