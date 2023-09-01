//HARD

//o(n) time o(1) space
function findLoop(head) {
  //traverse pushing into the set returning if set contains
  let cur = head;
  const visited = new Set();
  while (cur !== null) {
    if (visited.has(cur.next)) {
      return cur.next;
    }

    visited.add(cur);
    cur = cur.next;
  }
}
