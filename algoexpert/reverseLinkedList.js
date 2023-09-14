//HARD

//o(n) time o(1) space
function reverseLinkedList(head) {
  //set the variables for prev and cur
  let prev = null;
  let cur = head;

  //traverse list reversing as you go
  while (cur !== null) {
    const temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
    if (cur === null) {
      head = prev;
    }
  }

  return head;
}
