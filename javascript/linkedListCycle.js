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