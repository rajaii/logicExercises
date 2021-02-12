//  leetcode: easy: https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

var freqAlphabets = function(s) {
    //declare the mapper
    let mapper = {
        '1': 'a',
        '2': 'b',
        '3': 'c',
        '4': 'd',
        '5': 'e',
        '6': 'f',
        '7': 'g',
        '8': 'h',
        '9': 'i',
        '10#': 'j',
        '11#': 'k',
        '12#': 'l',
        '13#': 'm',
        '14#': 'n',
        '15#': 'o',
        '16#': 'p',
        '17#': 'q',
        '18#': 'r',
        '19#': 's',
        '20#': 't',
        '21#': 'u',
        '22#': 'v',
        '23#': 'w',
        '24#': 'x',
        '25#': 'y',
        '26#': 'z',
    };
    
    //split s and loop resetting the inde values to the mapper values
    let retStr = ''
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 2 && s[i+2] === '#') {
            let key = `${s[i]}${s[i+1]}${s[i+2]}`
            retStr += mapper[key]
            i += 2;
        } else {
            retStr += mapper[s[i]]   
        }
    }
    
    return retStr
};