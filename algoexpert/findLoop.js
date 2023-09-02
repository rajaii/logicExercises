//HARD

//o(n) time o(n) space
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

//o(n time) o(1) space
function findLoop(head) {
  let fast = head;
  let slow = head;
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      break;
    }
  }

  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}
