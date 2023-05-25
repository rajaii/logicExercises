//MEDIUM:

//first solution o(log n) time o(n) space
function findKthLargestValueInBst(tree, k) {
  const vals = [];
  function traverse(node) {
    if (node === null) {
      return;
    }

    vals.push(node.value);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(tree);

  vals.sort((a, b) => b - a);
  return vals[k - 1] || -1;
}

//sln 2 o(n) runtime o(n) space
function findKthLargestValueInBst(tree, k) {
  let nodes = [];
  function inOrderTraverse(node) {
    if (node === null) {
      return;
    }

    inOrderTraverse(node.left);
    nodes.push(node.value);
    inOrderTraverse(node.right);
  }

  inOrderTraverse(tree);
  console.log(nodes);

  return nodes.reverse()[k - 1] || -1;
}

//solution after hints:
function findKthLargestValueInBst(tree, k) {
  let nodes = [];
  function inOrderTraverse(node) {
    if (node === null) {
      return;
    }

    inOrderTraverse(node.right);
    nodes.push(node.value);
    inOrderTraverse(node.left);
  }

  inOrderTraverse(tree);

  return nodes[k - 1] || -1;
}
