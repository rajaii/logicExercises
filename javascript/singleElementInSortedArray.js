// from leetcode medium: https://leetcode.com/problems/single-element-in-a-sorted-array

var singleNonDuplicate = function(n) {
    //  loop n i += 2 and check if the next is ===
    for (let i = 0; i < n.length; i += 2) {
        if (i === n.length - 1) {
            return n[i];
        } else if (n[i+1] !== n[i]) {
            return n[i];
        }
    }
 };

//edge cases: 1 num
//questions: will there always be valid answer?

//Pseudo:
//loop nums 1+= 2
//if n[i+i] !== n

//if at end of array return a[i]
//return 