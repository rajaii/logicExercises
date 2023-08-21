//MEDIUM

//o(n) runtime, o(h) space (h is height of tree and call stack goes to longest height bc longest call is the height of the treee)
function invertBinaryTree(tree) {
  if (tree === null) {
    return null;
  }

  const temp = tree.right;
  tree.right = tree.left;
  tree.left = temp;
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
  return tree;
}
