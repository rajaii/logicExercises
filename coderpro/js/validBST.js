class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const test1 = new Node(1, 3, 5);

const test2 = new Node(5, 3, 7);

const isValidBinaryHelper = (node, low, high) => {
  if (node === null) {
    return;
  }

  if (node.val > low && node.val < high &&
    isValidBinaryHelper(node.left, low, node.val) &&
    isValidBinaryHelper(node.right, node.val, high)
    ) {
      return true;
  }
  return false;
}

const isValid = (node) => {
  return isValidBinaryHelper(node, -Infinity, Infinity);
}

console.log(isValid(test1));



// #PSEUDO:

// #traverse right dfs:
//   #if any value is greater than the root:
//     #return false

// #traverse left dfs:
//   #if any value is lower than root:
//     # return false

// #out of traversal:
//   # return true