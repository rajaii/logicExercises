//EASY

//Solution 1 o(n) time o(n) space

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstHelper(array, node) {
    if (node === null) {
      return;
    }

    array.push(node.name);
    for (let i = 0; i < node.children.length; i++) {
      this.depthFirstHelper(array, node.children[i]);
    }
  }

  depthFirstSearch(array) {
    this.depthFirstHelper(array, this);

    return array;
  }
}
