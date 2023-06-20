//EASY

function helper(node, sum, sums) {
  if (node === null) {
    return;
  }

  sum += node.value;

  if (node.left === null && node.right === null) {
    sums.push(sum);
  }

  helper(node.left, sum, sums);
  helper(node.right, sum, sums);
}

function branchSums(root) {
  let sum = 0;
  const sums = [];
  helper(root, sum, sums);
  return sums;
}
