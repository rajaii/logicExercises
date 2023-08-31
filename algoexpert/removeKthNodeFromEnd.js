//MEDIUM:

//sln 1 0(n) time o(1) space
function removeKthNodeFromEnd(head, k) {
  //get the count
  let cur = head;
  let nodeCount = 1;
  while (cur !== null) {
    nodeCount += 1;
    if (k === 1 && cur.next.next === null) {
      cur.next = null;
      return head;
    }
    cur = cur.next;
  }

  //if count - k === 1: do the preservative swap for head else loop until count - k and then swap
  if (nodeCount - k === 1) {
    head.value = head.next.value;
    head.next = head.next.next;
  } else {
    cur = head;
    let count = 0;
    while (count < nodeCount - k - 1) {
      count += 1;
      if (count === nodeCount - k - 1) {
        cur.next = cur.next.next;
      }
      cur = cur.next;
    }
  }
  return head;
}

//same time/space different spin
function removeKthNodeFromEnd(head, k) {
  let s = head;
  let f = head;
  for (let i = 0; i < k; i++) {
    s = s.next;
  }

  if (s === null) {
    head.value = head.next.value;
    head.next = head.next.next;
  }

  let prev = null;
  while (s !== null) {
    prev = f;
    s = s.next;
    f = f.next;
    if (s === null) {
      prev.next = f.next;
    }
  }

  return head;
}
