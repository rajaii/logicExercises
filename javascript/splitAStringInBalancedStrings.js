//from leetcode easy https://leetcode.com/problems/split-a-string-in-balanced-strings

var balancedStringSplit = function(s) {
    //handle edge case
    if (s.length === 1) {
        return 1;
    }
    
    //set memory to count L and R's and the amount of balanced substrings
    let LCount = 0;
    let RCount = 0;
    let bal = 0;
    
    //loop s counting L and R's and incrementing bal every time L and R are ===
    for (let i = 0; i < s.length; i++) {
         if (s[i] === 'R') {
            RCount += 1;
            if (LCount === RCount) {
            bal += 1;
            LCount = 0;
            RCount = 0;
        }
        } else if (s[i] === 'L') {
            LCount += 1;
            if (LCount === RCount) {
            bal += 1;
            LCount = 0;
            RCount = 0;
        }
        }
    }
        
    return bal;
};

//edge cases: s.length === 1; case where they count equal at end of loop
//?'s: limits on time/space?  If s.length = 1 we return 1?  How is that balanced?

//set LCount = 0
//set RCount = 0
//set bal = 0

//loop s

//if s[i] === 'R'
//RCount += 1
//if LCount === SCount:
//bal += 1
//LCount = 0
//SCount = 0
//else if s[i] === 'L'
//LCount += 1
//if LCount === SCount:
//bal += 1
//LCount = 0
//SCount = 0



//return bal;