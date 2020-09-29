//from leetcode easy https://leetcode.com/problems/ugly-number/submissions/

var isUgly = function(num) {
    if (num <= 0) return false;
    let factors = [], allowed = [2,3,5];
    while (num > 1) {
        if (num % 2 == 0) {
            factors.push(2);
            num = num / 2;
        }    
        else if (num % 3 == 0) {
            factors.push(3);
            num = num / 3;
        }
        else if (num % 5 == 0) {
            factors.push(5);
            num = num / 5;
        }
        else {
            factors.push(num);
            break;
        }
    }
    return factors.filter(x => {
        return allowed.includes(x) ? false : true;
    }).length == 0;
};
