//from leetcode easy: https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function(head) {
       //traverse the linked list resetting the val to 'hi' and if you run into a str           //return true
       let cur = head;
       while (cur != null) {
           if (cur.val === 'hi') {
               return true;
           }
           cur.val = 'hi'
           cur = cur.next;
       }
       
       return false;
   };
   

//edge cases: head === null, head.next == null
//?'s: limits on space, limits on time?

//PSEUDO
//traverse the linked list and if you come back to any node again return true

//let cur = head;
//while (cur.next != null):
//if (typeof cur.val === 'object')
//return true
//cur.val = {
//val: cur.val,
//}
//cur = cur.next

//new problem https://leetcode.com/problems/linked-list-cycle

var hasCycle = function(head) {
  const visited = new Set();
  let cur = head;
  while (cur) {
      if (visited.has(cur)) {
          return true;
      }
      visited.add(cur);
      cur = cur.next;
  }

  return false;
};

//make a visited array

//looop pushing in visited
//if (cur in visited) => ret true
//if out of loop return false

//refactor to o(1) space using cycle

var hasCycle = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast === slow) {
          return true;
      }
  }
  return false;
};