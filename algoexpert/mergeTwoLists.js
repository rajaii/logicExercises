//HARD:

//o(n+m) each being length of each list) time o(1) space
function mergeLinkedLists(headOne, headTwo) {
  //traverse both simultaneously using curOne, curTwo
  let p1 = headOne;
  let p1Prev = null;
  let p2 = headTwo;
  while (p1 !== null && p2 !== null) {
    if (p1.value < p2.value) {
      p1Prev = p1;
      p1 = p1.next;
    } else {
      if (p1Prev !== null) {
        p1Prev.next = p2;
      }
      p1Prev = p2;
      p2 = p2.next;
      p1Prev.next = p1;
    }
  }
  if (p1 === null) {
    p1Prev.next = p2;
  }

  if (headOne.value < headTwo.value) {
    return headOne;
  }
  return headTwo;
}
