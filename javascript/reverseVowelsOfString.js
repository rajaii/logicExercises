//from leetcode easy https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/

var reverseVowels = function(s) {
    //split s and set counter var and vowels arr so can track vowels 
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let l = [];
    let count1 = 1;
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
          l.push([s[i], i]);    
        }
    }

    let half;
    if (l.length % 2 === 0) {
        half = l.length / 2;
    } else {
        half = (l.length / 2) - ((l.length / 2) % 1)
    }
    for (let i = 0; i < half; i++) {
        let count2 = 0;
        if (vowels.includes(l[i][0])) {
            let backHalf;
            if (l.length % 2 === 0) {
                backHalf = l.length / 2 - 1;
            } else {
                backHalf = half;
            }
            for (let j = l.length - 1; j > backHalf; j--) {
                if (vowels.includes(l[j][0])) {
                    count2 += 1;
                    if (count2 === count1) {
                        let temp = l[i][0];
                        l[i][0] = l[j][0];
                        l[j][0] = temp;
                        count1 += 1;
                        count2 = 0;
                        break;
                    }
                }
            }
        }
    }
    
    let k = [];
    for (let i = 0; i < s.length; i++) {
        k.push(s[i])
    }
    
    for (let i = 0; i < k.length; i++) {
        for (let j = 0; j < l.length; j++) {
            if (i === l[j][1]) {
                k[i] = l[j][0]
            }
        }
    }
    
    return k.join('')

};

//edge cases: emtpy s, s.length === 1
//?'s: limits on time, space or inputs? lower vs upper  

//Pseudo:
//pull vowels out in an arr of form [v, i]
//loop forwad/back swapping arr[i][0] with arr[j][0]
//when swapped loop s and if s[i] is arr[i][0] swap


