//from leetcode easy: https://leetcode.com/problems/maximum-number-of-balloons/

var maxNumberOfBalloons = function(s) {
    //set balloon object to count letters
    let balloon = {
    'b': 0,
    'a': 0,
    'l': 0,
    'o': 0,
    'n': 0
    };
    
    //loop s counting the letters using the balloon object
    for (let i = 0; i < s.length; i++) {
        if (balloon[s[i]] != undefined) {
            if (s[i] === 'l' || s[i] === 'o') {
                balloon[s[i]] += .5;
            } else {
                balloon[s[i]] += 1;
            }
        } 
    }
    
    if (Object.values(balloon).every(b => b >= 1)) {
        let min = Math.min(...Object.values(balloon));
        return Math.floor(min);
        } else {
            return 0
        }
};

//edge cases: len(t) < 7, 
//?'s: limits on time, space

//PSEUDO:

//set balloon = {
// 'b': 0,
// 'a': 0,
// 'l': 0,//2 times
// 'o': 0,//2 times
// 'n': 0
// }
//loop s incrementing balloon[s[i]] if balloon[s[i]]!= undefined
//if s[i] === 'l' || s[i] === 'o'
//increment by .5

//if Object.values(balloon).every(b => b >= 1): 
//let min = Math.min(...Object.values(balloon))
//return math.floor(min)
//else:
//return 0