// from leetcode easy: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

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