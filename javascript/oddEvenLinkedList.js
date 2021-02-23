//from leetcode: medium: https://leetcode.com/problems/odd-even-linked-list/

var oddEvenList = function(head) {
    //handle edge cases
    if ((head != null && head.next === null) || head === null) {
        return head;
    }
    
    //set the empty arrays to track odds and evens
    const odds = [];
    const evens = [];
    
    //traverse twice pushing into odd and evens arrays
    let cur = head;
    let count = 1;
    while (cur != null) {
        if (count % 2 === 0) {
            evens.push(cur);
            count += 1;
            cur = cur.next;
        } else {
            odds.push(cur);
            count += 1;
            cur = cur.next;
        }
    }
    
    //loop odds and evens setting nexts
    for (let i = 0; i < odds.length; i++) {
        if (i === odds.length - 1) {
            odds[i].next = evens[0];
        } else {
        odds[i].next = odds[i+1];
        }
    }
    
    for (let i = 0; i < evens.length; i++) {
        if (i === evens.length - 1) {
            evens[i].next = null;
        } else {
        evens[i].next = evens[i+1];
        }
    }
    
    return head
};

//edge cases: empty LL, 2 in LL, 
//?'s: what to return if list empty

//set odds = [];
//set evens = [];
//traverse twice pushing into odd and evens arrays
//loop the odds setting the nexts (final next is evens[0])
//loop the evens setting the nexts
//return head