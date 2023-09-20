//MEDIUM:

//o(2n) === 0(n) time; o(4h) === o(h) where h is height of the tree space
function symmetricalTree(tree) {
  const queue1 = [tree];
  const queue2 = [tree];
  const visited1 = new Set();
  const visited2 = new Set();

  //bft doing concurrent traversals going opposite and check for inconsistencies
  while (queue1.length && queue2.length) {
    let cur1 = queue1[0];
    let cur2 = queue2[0];
    if ((cur1 === null && cur2 !== null) || (cur2 === null && cur1 !== null)) {
      return false;
    }

    if (cur1 && cur2 && !visited1.has(cur1) && !visited2.has(cur2)) {
      if (cur1.value !== cur2.value) {
        return false;
      }

      queue1.push(cur1.left);
      queue1.push(cur1.right);
      queue2.push(cur2.right);
      queue2.push(cur2.left);

      visited1.add(cur1);
      visited2.add(cur2);
    }

    queue1.shift();
    queue2.shift();
  }

  return true;
}

//same space/time but recursive:
function symmetricalTree(tree) {
  function check(left, right) {
    if (left !== null && right !== null && left.value === right.value) {
      return check(left.left, right.right) && check(left.right, right.left);
    }

    return left === right;
  }

  return check(tree.left, tree.right);
}
