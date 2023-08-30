//MEDIUM

//sln 1 o(n) time and space
function findSuccessor(tree, node) {
  let t = [];
  function inOrderDft(curNode) {
    if (curNode === null) {
      return null;
    }

    inOrderDft(curNode.left);
    t.push(curNode);
    console.log(curNode.value);
    inOrderDft(curNode.right);
    return null;
  }

  inOrderDft(tree);
  return t[t.indexOf(node) + 1];
}

//sln 2 o(h) time o(1) space
function findSuccessor(tree, node) {
  if (node.right !== null) {
    return getLeftmostChild(node);
  }

  return getRightMostParent(node);
}

function getLeftmostChild(node) {
  let currentNode = node.right;
  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }

  return currentNode;
}

function getRightMostParent(node) {
  let currentNode = node;
  while (
    currentNode.parent !== null &&
    currentNode.parent.right === currentNode
  ) {
    currentNode = currentNode.parent;
  }

  return currentNode.parent;
}
