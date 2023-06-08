//  Techseries:
//  next sec

//  Coderpro:
// session 2 do in Python from scratch, watch video again and again until get it

//  Algoexpert
//  DS lesson 2 lesson 4 memory 10 minutes
//  systems lesson 4 16.5 minutes
// https://josephharwood-62087.medium.com/recursion-and-binary-search-trees-in-javascript-ae965b9ea01d

//
//==> BST LEARN BASH
// watch bubble sort video and refactor,  then do med sort, then do easy med bst, then majorityElement watch video on bit manipulation solution and implement,   then watch video/redo construct bst, then a hard non bst, then easy/med bst, then haard non bst, then redo construct bst

//learn what recursion does undeer the hood as I am getting good with using it

// redo later these could not be done quickly and without looking at the hints/videos:
//maxSumIncreasingSubsequence
//validateBST

//later
// watch video and read on recursion bst traversal for:
// longestPeak
//  nodeDepths
//  arrayOfProducts
//  minimumWaitingTime
//  zeroSumArray

//not priority but validateThreeNodes solution 2 the way they did it

//try these with hints:
// findClosestVAlueBST
// longestPeak
//  nodeDepths

//Algo Expert: try again on own:
//three number sum: finished
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    function helperInsert(node) {
      if (node === null) {
        return;
      }

      if (value < node.value) {
        if (node.left && value > node.left.value) {
          const temp = node.left;
          node.left = new BST(value);
          node.left.left = temp;
          return;
        }
        if (!node.left) {
          node.left = new BST(value);
        }
        helperInsert(node.left);
      }

      if (value > node.value) {
        if (node.right && value <= node.right.value) {
          //insert to right
          const temp = node.right;
          node.right = new BST(value);
          node.right.right = temp;
          return;
        }
        if (!node.right) {
          node.right = new BST(value);
        }
        helperInsert(node.right);
      }
    }
    helperInsert(this);
    return this;
  }

  contains(value) {
    function helperSearch(node) {
      if (node === null) {
        return false;
      }
      if (node.value === value) {
        return true;
      }

      return helperSearch(node.left) || helperSearch(node.right);
    }
    return helperSearch(this);
  }

  remove(value) {
    function findNode(node, value) {
      if (node === null) {
        return false;
      }
      if (node.value === value) {
        return node;
      }

      return findNode(node.left, value) || findNode(node.right, value);
    }

    const cur = findNode(this, value);
    console.log("cur", cur);
    function findMin(node, min, mins) {
      console.log("mode", node, "/nmin", min);
      if (node === null) {
        return false;
      }
      if (node.value < min) {
        mins.push(node.value);
      }

      findMin(node.left, min, mins);
      findMin(node.right, min, mins);
      return Math.min(...mins);
    }

    const min = findMin(cur.right, Infinity, []);
    console.log("min", min);
    function deleteMin(node, value) {
      if (node === null) {
        return true;
      }
      if (node.right && node.right.value === value) {
        if (node.right.right || node.right.left) {
          let tempLeft = node.right.left;
          let tempRight = node.right.right;
          const newMin = findMin(node.right, Infinity, []);
          node.right = new BST(newMin);
          node.right.right = tempRight;
          node.right.left = tempLeft;
          deleteMin(node.right, newMin);
          return;
        } else {
          node.right = null;
          return;
        }
      }

      if (node.left && node.left.value === value) {
        if (node.left.right || node.left.left) {
          let tempLeft = node.left.left;
          let tempRight = node.left.right;
          const newMin = findMin(node.left, Infinity, []);
          node.left = new BST(newMin);
          node.left.left = tempLeft;
          node.right.right = tempRight;
          deleteMin(node.left, newMin);
          return;
        } else {
          node.right = null;
          return;
        }
      }

      deleteMin(node.left, value);
      deleteMin(node.right, value);
    }
    deleteMin(cur, min);

    cur.value = min;

    return this;
  }
}

const bin = new BST(10);

bin.left = new BST(5);
bin.left.left = new BST(2);
bin.left.right = new BST(7);

bin.right = new BST(15);
bin.right.right = new BST(30);
bin.right.right.right = new BST(30);
bin.right.left = new BST(12);
bin.right.left.right = new BST(13);

bin.insert(1000);
bin.remove(15);
console.log(bin);
