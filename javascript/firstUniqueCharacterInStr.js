//from leetcode easy https://leetcode.com/problems/first-unique-character-in-a-string

var firstUniqChar = function(s) {
    //double loop s and return i if s[i] != s[j] on the last j if any time s[i] === s[j] 
    //break inner loop
    if (s.length === 1) {
        return 0;
    } else if (s.length === 0) {
        return -1;
    } else {
    let repeats = [];
    for (let i = 0; i < s.length; i++) {
        if (i === s.length - 1 && !s.slice(0, s.length -1).includes(s[i])) {
                return i;
            }
        for (let j = i + 1; j < s.length; j++) {
            if (s[j] === s[i]) {
                repeats.push(s[i]);
                break;
            } else if (j === s.length - 1 && s[i] != s[j] && ! repeats.includes(s[i])) {
                return i;
            } 
        }
    }
    
    return -1
    }
};

//edge cases: last 1 non repeating, s.length = 1 or 0, 1 nr then everything else same 
//?'s: empty string case -1? limits on time, space? other limits on inputs?

//PSEUDO:
//double loop s (j=i+i; j < s.length; j++)
//look for any time s[j] === s[i]
//break second loop
//if (j === s.length - 1 && s[i] != s[j]):
//return i

//outside of loop:
//return -1
