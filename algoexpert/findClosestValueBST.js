//Easy:

//first sln o(n) time and space using bfs iterative

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