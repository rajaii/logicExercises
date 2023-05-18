//MEDIUM

//solution o(n) time o(d) space d=== depth of tree
function validateBst(tree) {
  const helperValidate = (node, min, max) => {
    if (node === null) {
      return true;
    }

    if (node.value < min || node.value >= max) {
      return false;
    }

    return (
      helperValidate(node.left, min, node.value) &&
      helperValidate(node.right, node.value, max)
    );
  };
  return helperValidate(tree, -Infinity, Infinity);
}
