//EASY:

//solution 1 o(n * 2) runtime (bc of shift) o(n) space:
function nodeDepths(root) {
  //  bft and make an object of depths
  const visited = new Set();
  const queue = [root];
  const depths = {};

  while (queue.length) {
    if (queue[0] && !visited.has(queue[0].value)) {
      if (queue[0].left) {
        depths[queue[0].left.value] = depths[queue[0].value] + 1 || 1;
      }

      if (queue[0].right) {
        depths[queue[0].right.value] = depths[queue[0].value] + 1 || 1;
      }
  
      visited.add(queue[0].value);
      queue.push(queue[0].left);
      queue.push(queue[0].right);
    }

    queue.shift();
  }

  return Object.values(depths).reduce((a,c) => a + c, 0);
}

//solution 2 o(n) time o(n) tagging items with i in queue instead of shift as the unshift itself is linear

function nodeDepths(root) {
  //  bft and make an object of depths
  const visited = new Set();
  const queue = [root];
  const depths = {};
  let i = 0;

  while (i < queue.length) {
    if (queue[i] && !visited.has(queue[i].value)) {
      if (queue[i].left) {
        depths[queue[i].left.value] = depths[queue[i].value] + 1 || 1;
      }

      if (queue[i].right) {
        depths[queue[i].right.value] = depths[queue[i].value] + 1 || 1;
      }
  
      visited.add(queue[i].value);
      queue.push(queue[i].left);
      queue.push(queue[i].right);
    }
    i += 1
  }

  return Object.values(depths).reduce((a,c) => a + c, 0);
}

//solution 3 using class and recursion for practice o(n) time and space

function nodeDepths(root) {
  class FindDepthOfRoot {
    constructor () {
      this.root = root;
    }

    findDepthHelper (node, depths) {
      if (node === null) {
        return;
      }

      if (node.left) {
        depths[node.left.value] = depths[node.value] + 1 || 1;
      }

      if (node.right) {
        depths[node.right.value] = depths[node.value] + 1 || 1;
      }
      
      this.findDepthHelper(node.left, depths);
      this.findDepthHelper(node.right, depths);
    }

    findDepth () {
      const depths = {};
      this.findDepthHelper(root, depths);
      return Object.values(depths).reduce((a,c) => a + c, 0);
    }
  }

  return new FindDepthOfRoot().findDepth();
}