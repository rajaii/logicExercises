//  from leetcode easy: https://leetcode.com/problems/remove-duplicates-from-sorted-list/

var deleteDuplicates = function(head) {
    //handle edge cases:
    if (head === null || head.next === null) {
        return head;
    }
    
    //set the list array to push nodes into
    const list = [];
    
    //traverse linked list pushing all into the array
    let cur = head;
    while (cur !== null) {
        list.push(cur);
        cur = cur.next;
    }
    
    //loop the array setting the nexts to be the one that is not equivalent
    for (let i = 0; i < list.length; i++) {
        let j = 0;
        while (list[i+1+j] !== undefined && list[i + 1 + j].val === list[i].val) {
            if (list[i + 2 + j] === undefined) {
                list[i].next = null;
                i += (2 + j);
                break;
            }
            j += 1;
            if (list[i + 1 + j] != list.val) {
               list[i].next = list[i + 1 + j]; 
            }
        } 
        i += j;
    }
    
    return head;

};

//edge cases: null list empty list, 
//?'s': 

//PSEUDO:
//2 ways:
//using array
//set list = [];
//traverse list pushing into array as go
//loop list
//let j = 0;
//while (list[i + 1 + j].val === list[i].val)
//j += 1
//if (list[i + 1 + j] != list.val):
//list[i].next = list[i + 1 + j]
// outside of while:
//i += j


//in place:
//traverse list 
//if (cur.next.val === cur.val)
//cur.next = cur.next.next
//