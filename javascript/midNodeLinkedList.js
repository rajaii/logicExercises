//from leetcode easy: https://leetcode.com/problems/middle-of-the-linked-list

var middleNode = function(head) {
    //set the counter variables
    let count = 0;
    let counter;
    
    //traverse list keeping track of count
    let cur = head;
    while (cur != null) {
        count += 1;
        cur = cur.next;
    }
    
    if (count % 2 === 0) {
        counter = count / 2 + 1;
    } else {
        counter = Math.ceil(count / 2);
    }
    //traverse list again count times and return the node when counter = 1
    cur = head;
    while (cur != null) {
        if (counter === 1) {
            return cur;
        } 
        counter -= 1;
        cur = cur.next;
    }
    
};

//edge cases: 1 node null, 
//?'s: limits on time/space? How to handle 1 node null

//PSEUDO:
//set count = 0
//traverse list entirely keeping count
//set a mid var

//traverse again count times and return that value