//  from leetcode easy: https://leetcode.com/problems/calculate-digit-sum-of-a-string/

var digitSum = function(s, k) {
  //loop while s.length > k and run conditions
    while (s.length > k) {
        let newS = "";
        for (let i = 0; i < s.length; i += k) {
            const sum1 = s.slice(i,i+k).split("").reduce((a,c) => parseInt(a) + parseInt(c), 0);
            newS = `${newS}${sum1}`;
        }
        s = newS;
    };
    
  return s;
};
