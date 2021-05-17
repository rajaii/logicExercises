// from leetcode easy: https://leetcode.com/problems/count-items-matching-a-rule

var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
        if (ruleKey === 'type' && ruleValue === items[i][0]) {
            count += 1;
        } else if (ruleKey === 'color' && ruleValue === items[i][1]) {
            count += 1;
        } else if (ruleKey === 'name' && ruleValue === items[i][2]) {
            count += 1;
        } 
    }
    
    return count;
};