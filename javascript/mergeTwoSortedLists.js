//  from leetcode: easy: https://leetcode.com/problems/merge-two-sorted-lists

var mergeTwoLists = function(list1, list2) {
  if (list1 === null && list2 === null) {
      return list1;
  }

  if (list1 === null && list2 !== null) {
      return list2;
  }

  if (list2 === null && list1 !== null) {
      return list1;
  }

  //make dummy node;
  let output;
  let outputCur;
  let cur1 = list1;
  let cur2 = list2;

  if (list1.val < list2.val) {
      output = list1;
      outputCur = list1;
      cur1 = cur1.next;
  } else {
      output = list2;
      outputCur = list2;
      cur2 = cur2.next;
  }

  
  while (cur1 !== null || cur2 !== null) {
      if (cur1 === null) {
          outputCur.next = cur2;
          cur2 = cur2.next;
          outputCur = outputCur.next;
          continue;
      }

      if (cur2 === null) {
          outputCur.next = cur1;
          cur1 = cur1.next;
          outputCur = outputCur.next;
          continue;
      } 

      if (cur1.val <= cur2.val) {
          outputCur.next = cur1;
          cur1 = cur1.next;
          outputCur = outputCur.next;
      } else if (cur1.val > cur2.val) {
          outputCur.next = cur2;
          cur2 = cur2.next;
          outputCur = outputCur.next;
      }
  }

  return output;
};

//PSEEDO:
//
//make new ListNode(pass in lower of the two head.val's)
//let cur;
//let notCur;
//if (list1.val <= list2.val) {
//cur = list1;
//notCur = list1
//} else {
//cur = list2;
//notCur = list1
//}

//let temp;