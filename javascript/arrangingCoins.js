//from leetcode easy https://leetcode.com/problems/arranging-coins/

var arrangeCoins = function(n) {
    //handle edge cases
    if (n === 1 || n === 2) {
        return 1;
    }
    
    if (n === 0) {
        return 0;
    }
    
    //set a staircase array to arrange the coins in 
    const staircase = [];
    
    //loop while counting pushing into staircase the coins
    let i = 1;
    while (true) {
        if (n-i < 0) {
            break
        } 
        staircase.push([i]);
        n -= i;
        i += 1;
        
    }
     
    if (staircase[staircase.length - 1][0] === staircase[staircase.length - 2][0] + 1) {
    return staircase.length
    } else {
        return staircase.length - 1
    }
};