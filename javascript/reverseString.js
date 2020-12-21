//from leetcode easy: https://leetcode.com/problems/reverse-string/submissions/

var reverseString = function(s) {
    var reverseString = function(s) {
        //loop to half of the array swapping s[i] with s[s.length - 1 - i]
        for (let i = 0; s.length % 2 === 0 ? i < s.length / 2 : i < s.length / 2 - ((s.length / 2) % 1); i++) {
            let temp = s[i];
            s[i] = s[s.length - 1 - i];
            s[s.length - 1 - i] = temp;
            
        }
        
        return s;
    };
}    

//edge cases: empty s, s.legth == 1, all same letter, all same letter except 1 beg or end
//?'s: limits on space?  

//Pseudo:
//set half
//if s.length % 2 === 0 => half = s.length / 2
//else => half = s.length / 2 - ((s.length / 2) % 1)
//set temp
//loop to half
//temp = s[i]
//s[i] = s[(s.length - 1) - i]
//s[(s.length - 1) - i] = temp

//return s