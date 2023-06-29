//MEDIUM:

//o(n) time and space:
function minHeightBst(array) {
  if (array.length === 0) {
    return null;
  }

  const mid = Math.floor(array.length / 2);
  const root = new BST(array[mid]);
  root.left = minHeightBst(array.slice(0, mid));
  root.right = minHeightBst(array.slice(mid + 1));
  return root;
}
