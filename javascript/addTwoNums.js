//  from leetcode medium: https://leetcode.com/problems/add-two-numbers

var addTwoNumbers = function(l1, l2) {
  const a1 = [];
  const a2 = [];

  let cur = l1;
  while (cur) {
      a1.push(cur.val.toString());
      cur = cur.next;
  }

  cur = l2;
  while (cur) {
      a2.push(cur.val.toString());
      cur = cur.next;
  }

  let num1 = a1;
  let num2 = a2;


  //sum individually bc js sucks:

  let sum = [];
  let toLoop;
  let notLooped;
  if (num1.length >= num2.length) {
      toLoop = num1;
      notLooped = num2;
  } else {
      toLoop = num2;
      notLooped = num1;
  }
  
  let extra = 0;
  for (let i = 0; i < toLoop.length; i++) {
      if (!notLooped[i]) {
          if (parseInt(toLoop[i]) + extra >= 10) {
              sum.push((parseInt(toLoop[i]) + extra).toString()[1]); 
              extra = 1;
              continue;
          } else {
              sum.push(parseInt(toLoop[i]) + extra);
              extra = 0;
              continue;
          }
      }

      if (parseInt(toLoop[i]) + parseInt(notLooped[i]) + extra >= 10) {
          sum.push((parseInt(toLoop[i]) + parseInt(notLooped[i]) + extra).toString()[1]);
          extra = 1;
          continue;
      } else {
          sum.push((parseInt(toLoop[i]) + parseInt(notLooped[i]) + extra).toString());
          extra = 0;
      }
  }
  if (extra) {
      sum.push(extra.toString());
  }
  
  cur = new ListNode(parseInt(sum[0]));
  let newHead = cur;
  for (let i = 0; i < sum.length; i++) {
      if (i === sum.length - 1) {
          cur.next = null;
          break;
      }
      cur.next = new ListNode(sum[i+1]);
      cur = cur.next;
  }

  return newHead;
  
};
//const a1 = []
//const a2 = []
//traverse list and store values as strings in an array

//reverse the arrays
//concat the strings into 1 string
//parseInt the 1 strings and add

//take the result of that and split into strings in an array
//reverse that array
//loop the reversed final array and set nodes

//may have js adding issues and need to refactor to do dig addition