//from leetcode medium: https://leetcode.com/problems/sort-list

var sortList = function(head) {
    if (head === null) {
        return head;
    }
    
    const a = [];
    
    //traverse list and push into array
    let cur = head;
    while (cur !== null) {
        a.push(cur.val);
        cur = cur.next;
    }
    
    //sort a
    a.sort((a,b) => a - b);
    
    //create new ll from sorted a and return that
    const newHead = new ListNode(a[0], null);
    cur = newHead;
    for (let i = 1; i < a.length; i++) {
        cur.next = new ListNode(a[i], null);
        cur = cur.next;
    }
    
    return newHead;
    
    
};

//PSEUDO
//traverse LL and push into an array
//sort array
//create new linked list from sorted array