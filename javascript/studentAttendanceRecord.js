//from leetcode easy: https://leetcode.com/problems/student-attendance-record-i

var checkRecord = function(s) {

        const regx = /(A.*A)|L{3}/g;
        return !regx.test(s);
      
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


