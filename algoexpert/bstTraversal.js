//MEDIUM:

//first solution o(n) runtime where n is the number of nodes o(1) space assuming we don't count the input array
function inOrderTraverse(tree, array) {
  if (tree === null) {
    return;
  }

  inOrderTraverse(tree.left, array);
  array.push(tree.value);
  inOrderTraverse(tree.right, array);

  return array;
}

function preOrderTraverse(tree, array) {
  if (tree === null) {
    return;
  }

  array.push(tree.value);
  preOrderTraverse(tree.left, array);
  preOrderTraverse(tree.right, array);
  return array;
}

function postOrderTraverse(tree, array) {
  if (tree === null) {
    return;
  }

  postOrderTraverse(tree.left, array);
  postOrderTraverse(tree.right, array);
  array.push(tree.value);
  return array;
}

//dft
function dft(tree, array) {
  const stack = [tree];
  const visited = new Set();

  while (stack.length) {
    const cur = stack.pop();

    if (cur) {
      if (!visited.has(cur.right)) {
        stack.push(cur.right);
      }

      if (!visited.has(cur)) {
        array.push(cur.value);
        visited.add(cur);
      }

      if (!visited.has(cur.left)) {
        stack.push(cur.left);
      }
    }
  }
  return array;
}

//PSEUDO:
// Created a stack of nodes and visited array.
// Insert the root in the stack.
// Run a loop till the stack is not empty.
// Pop the element from the stack and print the element.
// For every adjacent and unvisited node of current node, mark the node and insert it in the stack.
