//EASY:

//solution o(max(m,n)) time and o(max(n,n)) space where m, and n are the 2 input lists
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let cur1 = linkedListOne;
  let numStr1 = '';
  while (cur1 !== null) {
    numStr1 += cur1.value.toString();
    cur1 = cur1.next;
  }

  let cur2 = linkedListTwo;
  let numStr2 = '';
  while (cur2 !== null) {
    numStr2 += cur2.value.toString();
    cur2 = cur2.next;
  }
  numStr1 = numStr1.split('').reverse().join('');
  numStr2 = numStr2.split('').reverse().join('');

  let sum = parseInt(numStr1) + parseInt(numStr2);
  let digs = sum.toString().split('').reverse();

  const newHead = new LinkedList(parseInt(digs[0]));
  let finCur = newHead;
  for (let i = 1; i < digs.length; i++) {
    finCur.next = new LinkedList(parseInt(digs[i]));
    finCur = finCur.next;
  }
  finCur.next = null;

  return newHead;
}

//got rid of the string concatenation

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let cur1 = linkedListOne;
  let num1 = [];
  while (cur1 !== null) {
    num1.push(cur1.value.toString());
    cur1 = cur1.next;
  }

  let cur2 = linkedListTwo;
  let num2 = [];
  while (cur2 !== null) {
    num2.push(cur2.value.toString());
    cur2 = cur2.next;
  }
  const numStr1 = num1.reverse().join('');
  const numStr2 = num2.reverse().join('');

  let sum = parseInt(numStr1) + parseInt(numStr2);
  let digs = sum.toString().split('').reverse();

  const newHead = new LinkedList(parseInt(digs[0]));
  let finCur = newHead;
  for (let i = 1; i < digs.length; i++) {
    finCur.next = new LinkedList(parseInt(digs[i]));
    finCur = finCur.next;
  }
  finCur.next = null;

  return newHead;
}
