//from leetcode easy: https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function(j,s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (j.includes(s[i])) {
            count += 1;
        }
    }
    return count;
};