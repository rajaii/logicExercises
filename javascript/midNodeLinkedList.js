//from leetcode easy: https://leetcode.com/problems/middle-of-the-linked-list

var middleNode = function(head) {
    //set the tracker array
    let tracker = [];
    let mid;
    
    //traverse list keeping track of count
    let cur = head;
    while (cur != null) {
        tracker.push(cur);
        cur = cur.next;
    }
    
    if (tracker.length % 2 === 0) {
        mid = tracker.length / 2;
    } else {
        mid = Math.floor(tracker.length / 2);
    }
    
    return tracker[mid];
    
};

//edge cases: 1 node null, 
//?'s: limits on time/space? How to handle 1 node null

//PSEUDO:
//set count = 0
//traverse list entirely keeping count
//set a mid var

//traverse again count times and return that value

//REFACTOR:
//traverse linked list pushing nodes in an array
//define mid based off of array.length
//return array[mid of array]