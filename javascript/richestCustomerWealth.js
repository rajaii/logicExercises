//From leetcode easy https://leetcode.com/problems/richest-customer-wealth/submissions/

var maximumWealth = function(a) {
    //set maximum
    let maximum = 0;
    let temp = 0;
    //loop accounts taking the sum of a[i] and setting to max if it is greater than current maximum
    for (let i = 0; i < a.length; i++) {
        temp += a[i].reduce((a,c) => a + c, 0);
        if (temp > maximum) {
            maximum = temp
        }
        temp = 0;
    }
    
    return maximum
};
