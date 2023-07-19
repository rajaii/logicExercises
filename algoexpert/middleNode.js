//EASY

//o(n) time o(1) space
function middleNode(linkedList) {
  let cur = linkedList;
  let count = 0;
  while (cur !== null) {
    count += 1;
    cur = cur.next;
  }

  let target;
  if (count % 2 === 0) {
    target = count / 2 + 1;
  } else {
    target = Math.ceil(count / 2);
  }

  cur = linkedList;
  let finCount = 0;
  while (cur !== null) {
    finCount += 1;
    if (finCount === target) {
      return cur;
    }
    cur = cur.next;
  }
  return null;
}
