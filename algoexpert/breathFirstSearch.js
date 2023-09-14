//MEDIUM:

//o(v * e) vertices === v and e === edges of graph, o(v) space
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    const queue = [this];
    const visited = new Set();

    while (queue.length) {
      if (queue[0]) {
        if (!visited.has(queue[0])) {
          for (let i = 0; i < queue[0].children.length; i++) {
            queue.push(queue[0].children[i]);
          }
          array.push(queue[0].name);
          visited.add(queue[0]);
        }
      }
      queue.shift();
    }
    return array;
  }
}
