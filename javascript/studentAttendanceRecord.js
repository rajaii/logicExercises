//from leetcode easy: https://leetcode.com/problems/student-attendance-record-i

var checkRecord = function(s) {
    //set counters to count A and L
    let ACounter = 0;
    
    //loop s checking if s[i] === L or A and increment the respictive counter
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L' && s[i+1] === 'L' && s[i+2] === 'L') {
        return false;           
        } else if (s[i] === 'A') {
            ACounter += 1;
        } if (ACounter >= 2) {
            return false;
        }
    }
    
    //return true if made it outside the loop\
    return true;
};

//edge cases: last A or L at end of s, all P's As or L's, empty string, s.length lower than 4
//?'s: will we get empty strings and how to handle if so? will the s.length be a cetain //length? limits on time/space/inputs?

//PSEUDO:

//set A counter
//loop s
//if s[i] === L && next 2 also or A increment the respective counter
    //if ACounter >= 2 ret false

//outside loop:
//return true
