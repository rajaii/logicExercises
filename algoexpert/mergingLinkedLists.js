//MEDIUM

//o(n) time where n == length of both lists combined o(n) space
function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let count1 = 0;
  let count2 = 0;
  let cur1 = linkedListOne;
  let cur2 = linkedListTwo;
  while (cur1 !== null) {
    count1 += 1;
    cur1 = cur1.next;
  }

  while (cur2 !== null) {
    count2 += 1;
    cur2 = cur2.next;
  }

  //traverse and make object of form {nodeValue: node}
  cur1 = linkedListOne;
  cur2 = linkedListTwo;
  const tag1 = {};
  const tag2 = {};

  while (cur1 !== null || cur2 !== null) {
    if (cur1) {
      tag1[cur1.value] = [cur1, count1 - 1];
      cur1 = cur1.next;
      count1 -= 1;
    }

    if (cur2) {
      tag2[cur2.value] = [cur2, count2 - 1];
      cur2 = cur2.next;
      count2 -= 1;
    }
  }

  //loop the smaller object and check if other set has the object looping again to verify if all are same
  let smaller = tag2;
  let bigger = tag1;
  if (Object.keys(tag1).length <= Object.keys(tag2).length) {
    smaller = tag1;
    bigger = tag2;
  }

  const possibles = [];
  for (let key in smaller) {
    if (bigger[key] && bigger[key][0] === smaller[key][0]) {
      possibles.push(bigger[key]);
    }
  }

  let max = [0, null];
  for (let i = 0; i < possibles.length; i++) {
    if (possibles[i][1] >= max[0]) {
      max = [possibles[i][1], possibles[i][0]];
    }
  }

  return max[1];
}
