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