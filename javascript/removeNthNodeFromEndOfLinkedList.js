//  from leetcode medium: https://leetcode.com/problems/remove-nth-node-from-end-of-list

var removeNthFromEnd = function(head, n) {
    if (head.next === null && n === 1) {
        return null;
    }

    let count = 0;
    let cur = head;
    while (cur !== null) {
        count += 1
        cur = cur.next;
    }

    let timesToTraverse = count - n;
    cur = head;
    console.log(count)
    console.log(timesToTraverse)
    if (count === n) {
        let temp = head.next;
        head.next = null;
        return temp;
    }
    while (timesToTraverse !== 0) {
        timesToTraverse -= 1;   
        if (timesToTraverse === 0) {
            let temp = cur.next.next;
            cur.next.next = null;
            cur.next = temp;
        }
        cur = cur.next;
    }

    return head;
};

//PSEUDO:
//set count to 0 and traverse to end finding count

//count - n is how many you will traverse forward
//now split at count - n
//return head