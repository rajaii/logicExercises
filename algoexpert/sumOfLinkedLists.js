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

//Same time but 0(1 space):
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let toLoop;
  let other;
  let count1 = 0;
  let cur = linkedListOne;
  while (cur !== null) {
    count1 += 1;
    cur = cur.next;
  }

  let count2 = 0;
  let curTwo = linkedListTwo;
  while (curTwo !== null) {
    count2 += 1;
    curTwo = curTwo.next;
  }

  if (count1 >= count2) {
    toLoop = linkedListOne;
    other = linkedListTwo;
  } else {
    toLoop = linkedListTwo;
    other = linkedListOne;
  }

  const dummy = new LinkedList(0);
  let current = dummy;
  let cur1 = toLoop;
  let cur2 = other;
  let carry = 0;
  while (cur1 !== null) {
    if (cur2) {
      if (cur1.value + cur2.value + carry > 9) {
        current.next = new LinkedList(
          parseInt((cur1.value + cur2.value + carry).toString()[1])
        );
        carry = 1;
      } else if (cur1.value + cur2.value + carry <= 9) {
        current.next = new LinkedList(cur1.value + cur2.value + carry);
        carry = 0;
      }
      cur1 = cur1.next;
      cur2 = cur2.next;
      current = current.next;
    } else {
      if (cur1.value + carry > 9) {
        current.next = new LinkedList(
          parseInt((cur1.value + carry).toString()[1])
        );
        carry = 1;
      } else {
        current.next = new LinkedList(cur1.value + carry);
        carry = 0;
      }

      cur1 = cur1.next;
      current = current.next;
    }
  }

  if (carry) {
    current.next = new LinkedList(1);
  }

  return dummy.next;
}

//cleaner:
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  const dummy = new LinkedList(0);
  let current = dummy;
  let carry = 0;

  let cur1 = linkedListOne;
  let cur2 = linkedListTwo;

  while (cur1 || cur2) {
    const val1 = cur1 ? cur1.val : 0;
    const val2 = cur2 ? cur2.val : 0;
    const sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    current.next = new LinkedList(sum % 10);

    current = current.next;
    if (cur1) cur1 = cur1.next;
    if (cur2) cur2 = cur2.next;
  }

  if (carry) {
    current.next = new LinkedList(carry);
  }

  return dummy.next;
}
