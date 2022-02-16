//from leetcode easy: https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

var minimumDifference = function(n, k) {
    //edge cases
    if (n.length === 1 || k === 1) {
        return 0;
    }

    if (n.length === 2) {
        return Math.max(...n) - Math.min(...n);
    }
    
    //  sort n
    n.sort((a,b) => a - b);
    
    //find the 2 ka apart that have the lowest difference
    let lowDiff = Infinity;
    
    for (let i = 0; i < n.length; i++) {
        if (n[i + (k - 1)] - n[i] < lowDiff) {
            lowDiff = n[i + (k - 1)] - n[i];
        }
    }
    
    return lowDiff;
    
    
    
  
};

//PSEUDO:
//handle edge cases
// if (n.length === 1 || k === 1) {
//     return 0;
// }

// if (n.length === 2) {
//     return Math.max(n) - Math.min(n)
// }

//sort n
//find the 2 k apart that have the lowest difference

//loop n
//

//return the difference