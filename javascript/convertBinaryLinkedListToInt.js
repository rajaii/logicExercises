//from leetcode: easy: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/submissions

var getDecimalValue = function(head) {
    //  set string to concat with
    let str = '';
    
    //  traverse linked list
    let cur = head;
    while (cur != null) {
        str += cur.val;
        cur = cur.next;
    }
    
    return parseInt(str, 2);
};

//PSEUDO:
//set str
//traverse LL concating to str as you go

//return parseInt(str, 2)