//EASY:

//first sln: o(n) runtime o(1) space
function removeDuplicatesFromLinkedList(linkedList) {
  let cur = linkedList;
  while (cur !== null) {
    while (cur && cur.next && cur.next.value === cur.value) {
      let temp = cur.next.next;
      cur.next.next = null;
      cur.next = temp;    
    }
     cur = cur.next;
  }
  return linkedList;
}

