//from leetcode easy: https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function(head) {
    //traverse the linked list resetting the val to an object and if you run into an         //object return false
    let cur = head;
    while (cur != null) {
        if (typeof cur.val === 'object') {
            return true;
        }
        
        cur.val = {
            val: cur.val
        }
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