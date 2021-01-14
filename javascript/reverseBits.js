//from leetcode easy: https://leetcode.com/problems/reverse-bits/

var reverseBits = function(n) {
    //set the string that is to be manipulated pad with 0's to make 32 bit and handle       //leading 0's being ignored and split into an array
    let s = n.toString(2).padStart(32, 0)
    let arr = s.split('');
    
    //use reverse to reverse array
    arr.reverse();
    
    return parseInt(arr.join(''),2);
};

//?'s: limits on time/space?
//edge cases: all 0, all 0 then 1, 1 then all 0, leading 0's

//pseudo:
//let s = n.toString(2)
//pad with leading 0's to make 32 bit
//split s into array
//loop arr to half and swap s[i] with s[s.length - 1 - i]
//return parseInt(arr.join(''), 2)