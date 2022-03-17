// from leetcode medium: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

var searchRange = function(n, t) {
    //handle edge case
    if (!n.includes(t)) {
        return [-1, -1];
    }
    
    //set the memory needed
    const retArr = [];
    let started = false;
    
    //loop n and run conditions
    for (let i = 0; i < n.length; i++) {
        if (!started && n[i] === t && n[i+1] !== t) {
            return [i, i]
        } else if (n[i] === t && !started) {
            retArr.push(i);
            started = true;
        } else if (started && n[i] === t && n[i+1] !== t) {
            retArr.push(i)
        return retArr;
        }
    }
};
//brute force: (then bst)
//edge cases:
//if (!n.includes(t)) {
//return [-1, -1]
//}

//PSEUDO:
//set retArr = [];
//set started = false;
//loop  n
//if (!started && n[i] === t && n[i+1] !== t) {
//return [i, i]
//} else if (n[i] === t && !started) {
//retArr.push(i);
//started = true;
//} else if (started && n[i] === t && n[i+1] !== t) {
//retArr.push(i)
//return retArr;
//}

//REFACTOR

var searchRange = function(n, t) {
const tA = [n.indexOf(t)];

if (tA[0] === -1) {
    return [-1,-1];
}

for (let i = tA[0]; i < n.length; i++) {
    if (n[i] !== t) {
        tA.push(i-1);
        return tA;
    } else if (i === n.length - 1) {
        tA.push(n.length - 1);
        return tA;
    } 
}
};