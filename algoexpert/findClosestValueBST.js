//Easy:

//first sln o(n ^ 2) time and space using bfs iterative
function findClosestValueInBst(tree, target) {
  //store min
  let min = Infinity;
  value = null;

  //traverse bst 
  const queue = [tree];
  const visited = [tree];

  while (queue.length) {
    if (queue[0] && !visited.includes(queue[0].value)) {
      if (Math.abs(queue[0].value - target) < min) {
      min = Math.abs(queue[0].value - target);
      value = queue[0].value
    }
    
      queue.push(queue[0].left);
      queue.push(queue[0].right);
    }

    queue.shift();
  }

  return value;
}



//using class and recursion

function findClosestValueInBst(tree, target) {
  class TraverseAndFind {
    constructor () {
      this.tree = tree;
      this.target = target;
    }

    traverseHelper (node, min, value) {
      if (node === null) {
        return value;
      }

      if (Math.abs(node.value - this.target) < min) {
        min = Math.abs(node.value - this.target);
        value = node.value;
      }

      this.traverseHelper(node.left, min, value);
      this.traverseHelper(node.right, min, value);
    }

    traverse () {
      let min = Infinity;
      let value = null;
      return this.traverseHelper(this.tree, min, value);
    }
  }

  return new TraverseAndFind().traverse();
}

//second sln o(n) time and space using set to improve time
function findClosestValueInBst(tree, target) {
  //store min
  let min = Infinity;
  value = null;

  //traverse bst 
  const queue = [tree];
  const visited = new Set();
  visited.add(tree);

  while (queue.length) {
    if (queue[0] && !visited.has(queue[0].value)) {
      if (Math.abs(queue[0].value - target) < min) {
      min = Math.abs(queue[0].value - target);
      value = queue[0].value
    }
      visited.add(queue[0]);
      queue.push(queue[0].left);
      queue.push(queue[0].right);
    }

    queue.shift();
  }

  return value;
}