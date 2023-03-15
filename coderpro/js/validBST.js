class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.right = right,
    this.left = left;
  }
}

const test1 = new Node(1, new Node(2), new Node(3));

const test2 = new Node(5, new Node(3), new Node(7));

class Solution {
  isValidBinaryHelper = (node, low, high) => {
    if (node === null) {
      return true;
    }
  
    if ((node.val > low && node.val < high) &&
      this.isValidBinaryHelper(node.left, low, node.val) &&
      this.isValidBinaryHelper(node.right, node.val, high)
      ) {
        return true;
    }
    return false;
  }
  
  isValid = (node) => {
    return this.isValidBinaryHelper(node, -Infinity, Infinity);
  }
}


console.log(new Solution().isValid(test1));



// #PSEUDO:

// #traverse right dfs:
//   #if any value is greater than the root:
//     #return false

// #traverse left dfs:
//   #if any value is lower than root:
//     # return false

// #out of traversal:
//   # return true