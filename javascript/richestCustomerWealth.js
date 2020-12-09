//From leetcode easy https://leetcode.com/problems/richest-customer-wealth/submissions/

var maximumWealth = function(a) {
    return Math.max(...a.map(n => n.reduce((a,c) => a + c, 0)));
};
