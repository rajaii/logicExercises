//from leetcode: easy: https://leetcode.com/problems/height-checker

var heightChecker = function(h) {
    const heights = [...h];
    let count = 0;
    heights.sort((a,b) => a - b)
    h.forEach((n,i) => {
        if (n != heights[i]) {
            count += 1;
        }
    })
    return count;
};