// from leetcode easy https://leetcode.com/problems/intersection-of-two-linked-lists/

var getIntersectionNode = function(headA, headB) {
    //handle edge cases
    if (headA === null || headB === null) {
        return null;
    } else if (headA === headB) {
        return headA;
    } else {
    
    //traverse both lists and push into arrays
    const arrA = [];
    const arrB = [];
    let cur = headA;
    while (cur !== null) {
    arrA.push(cur);
    cur = cur.next;
    }

    cur = headB;
    while (cur !== null) {
    arrB.push(cur);
    cur = cur.next;
    }
    
    
    if (arrA[arrA.length - 1] !== arrB[arrB.length - 1]) {
        return null;
    }
    
    while (arrA.length !== arrB.length) {
        if (arrB.length > arrA.length) {
            arrB.shift();
        } else {
            arrA.shift();
        }
    }
        
    if (arrA.length === 1 || arrA[0] === arrB[0]) {
        return arrA[0];
    }
    
    //loop one array backwards and check it against other array.  I arrA[i] !== arrB[i] 
    //then return arrA[i+1].  Use an if to check 
    for (let i = arrA.length - 1; i >= 0; i--) {
        if (arrA[i] !== arrB[i]) {
            return arrA[i+1];
        } 
    }
    
    }
};

//edge cases: no intersection, null head a && || b, 
//?'s: negative numer of nodes in headB as per constrainits?? those vals are strings or nums?
//Will there be cases where they intersect and split off will assumenot on first attempt??

//traverse both and push the nodes into arrays
//loop one array backwards comparing from other array until arr1[i] != arrb[i]
//then arr[i+1] is the intersecting node so return it in the loop

//outside of loop return null

//const arrA = [];
//const arrB = [];
//let cur = headA;
//while (cur !== null) {
//arrA.push(cur);
//cur = cur.next;
//}

//cur = headB;
//while (cur !== null) {
//arrB.push(cur);
//cur = cur.next;
//}