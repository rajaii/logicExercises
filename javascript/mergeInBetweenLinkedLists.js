//from leetcode medium: https://leetcode.com/problems/merge-in-between-linked-lists/

var mergeInBetween = function(list1, a, b, list2) {
    //traverse list 1 iterating index as traverse, when i == a start placing list 2 in
    //when i == b stop  
    let i = 0;
    let cur = list1;
    while (cur != null) {
        i += 1;
        if (i === a) {
            let cur2 = list2;
            while(cur2 != null && i != b) {
                i += 1
                if (i === b) {
                    cur.val = cur2.val
                    break; 
                }
                cur.val = cur2.val
                cur2 = cur2.next
                cur = cur.next
            }
        }
       cur = cur.next; 
    }
    
    return list1;
};

//edge cases: empty list 1, len(li) === len(l2) and a = 0 b = len(l1)-1
//?'s: will list2 always fit in list 1, and if not, which poriton of it to place in L1?',


//Pseudo:
//set index = 0;
//traverse list 1 iterating index as traverse, when i == a start placing list 2 in
//when i == b stop
//let cur = list1
//while (cur != null):
//i += 1
//if (i === a):
    //let cur2 = list2
    //while (i != b && cur2 != null):
    //if (i + 1 === b):
        //cur.val = cur2.val
        //cur2 = cur2.next
        //i += 1
        //break;
    //cur.val = cur2.val
    //cur2 = cur2.next
    //cur = cur.next
    //i += 1
    //cur = cur.next
//cur = cur.next

    
//return list1
