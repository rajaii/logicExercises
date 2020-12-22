//from leetcode easy: https://leetcode.com/problems/palindrome-linked-list/submissions/

var isPalindrome = function(head) {
    //set the array that will be pushed into and looped later to check
    let arr = [];
    
    //traverse linked list pushing vals into array
    let cur = head;
    while (cur != null) {
        arr.push(cur.val);
        cur = cur.next;
    }
    
    //loop array to half and check if is palindrome returning false if it is not
    for (let i = 0; arr.length % 2 === 0 ? i < arr.length / 2 : i < (arr.length / 2) - ((arr.length / 2) % 1); i++) {
        if (arr[i] != arr[arr.length - 1 -i]) {
            return false;
        }
    }
    
    return true;
};

//edge cases: head === null, head.next is null,
//?'s: limits on time/space? limits on inputs, will be given empty lists? How to handle null

//PSEUDO

//traverse the list and push all vals into an array
//loop the array to half and see if arr[i] === arr[arr.length - 1 - i]
//if not ^ return false
//return true out of loop
