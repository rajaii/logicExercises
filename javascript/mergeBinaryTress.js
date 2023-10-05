//MEDIUM:

//recursive:
function mergeBinaryTrees(tree1, tree2) {
  if (tree1 === null) {
    return tree2;
  }

  if (tree2 === null) {
    return tree1;
  }

  tree1.value += tree2.value;
  tree1.left = mergeBinaryTrees(tree1.left, tree2.left);
  tree1.right = mergeBinaryTrees(tree1.right, tree2.right);
  return tree1;
}

//iterative: o(n) time o(h) - h being height of shorter tree - space
function mergeBinaryTrees(tree1, tree2) {
  if (tree1 === null) {
    return tree2;
  }

  const stack1 = [tree1];
  const stack2 = [tree2];

  while (stack1.length) {
    const tree1Node = stack1.pop();
    const tree2Node = stack2.pop();
    if (tree2Node === null) {
      continue;
    }
    tree1Node.value += tree2Node.value;
    if (tree1Node.left === null) {
      tree1Node.left = tree2Node.left;
    } else {
      stack1.push(tree1Node.left);
      stack2.push(tree2Node.left);
    }

    if (tree1Node.right === null) {
      tree1Node.right = tree2Node.right;
    } else {
      stack1.push(tree1Node.right);
      stack2.push(tree2Node.right);
    }
  }

  return tree1;
}
