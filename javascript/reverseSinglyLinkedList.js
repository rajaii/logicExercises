//from leetcode: easy https://leetcode.com/problems/reverse-linked-list/submissions/

var reverseList = function(head) {
    
    let cur = head;
    let prev = null;
    //traverse list swapping nexts and using a temp to hold the link to the node that was next before the swap
    while (cur != null) {

    let temp = cur.next
    cur.next = prev;
    prev = cur;
    cur = temp;

    }
    //return the prev
    return prev
    
 
    
};

//edge cases: single  node list, empty list, 
//?'s: limits on time, space, inputs

//PSEUDO
//traverse and swap nexts as traversing
//let prev = null
//let cur = head
//while (cur.next != null)
//let temp = cur.next
//cur.next = prev
//prev = cur
//cur = temp
//return prev

//brute force: 1/23/2023
var reverseList = function(head) {
  if (head === null) {
      return head;
  }
  let cur = head;
  let arr = [];
  while (cur !== null) {
      arr.push(cur.val);
      cur = cur.next;
  }

  arr.reverse();
  const reversed = new ListNode(arr[0], arr[1]);
  cur = reversed;
  for (let i = 1; i < arr.length; i++) {
      cur.next = new ListNode(arr[i], arr[i+1]);
      cur = cur.next;
  }

  return reversed;
};

//PSEUDO
//traverse and push into an array 
//reverse the array
//make new list and set the vals

//return the new list

var reverseList = function(head) {
  if (head === null) {
      return head;
  }
  let cur = head;
  let prev = null;
  
  while (cur !== null) {
      const temp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = temp;
      if (cur === null) {
          return prev
      }
  }
};

//PSEUDO
//set cur
//set temp as the curs next
//set the next as the prev
//set cur to the temp

//return the new list