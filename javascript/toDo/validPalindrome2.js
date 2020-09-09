//from leetcode easy: https://leetcode.com/problems/valid-palindrome-ii/

var validPalindrome = function(s) {
    //     if (s.length === 3) {
    //         if (s[0] != s[2]) {
    //             return false
    //         } else {
    //             return true
    //         }
    //     }
        
    //     //set counter and j
    //     let counter = 0;
    //     let j = 0;
        
    //     //loop backwards to Math.floor(s.length / 2) checking s[i] to s[j] and iterate counter       //if not equal
        
    //     for (let i = s.length - 1; i > Math.floor(s.length / 2) - 1; i--) {
    //         if (counter > 1) {
    //             return false;
    //         }
            
    //         if (s[i] === s[j]) {
    //             j += 1;
    //         } else if (s[i] != s[j] && s[i-1] === s[j]) {
    //             counter += 1;
    //         } else if (s[i] != s[j] && s[i+1] === s[j]) {
    //             counter += 1;
    //             j += 1;
    //         }
    //     }
        
    //     if (counter > 1) {
    //         return false;
    //     } else {
    //         return true;
    //     }
        let s1 = s.split(0, Math.floor(s.length / 2) +1)
        let s2;
        
        if ((s.length / 2) % 1 != 0) {
            s2 = s.split(Math.floor(s.length / 2) + 2);
        } else {
            s2 = s.split(s.length / 2);
        }
        
    };
    
    //edge cases: empty string, string all same char?  3 chars, remove 1 and not eqaul,
    //?'s: limits on time/space? Does the test consider it a palindrome if all same char? 
    
    //teb bem abc j gba
    //split s into 2 if uneven cut out middle, if 
    //loop s's back and forth deleting if not equal and then reverse second s
    //if s's are = ret t esle false