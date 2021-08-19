//  from leetcode easy: https://leetcode.com/problems/find-the-difference

var findTheDifference = function(s, t) {
    // handle edge cases
    if (s === "") {
        return t[0];
    // } else if (s.length === 1) {
    //     return t[1];
    // }
        
    }
    else {
        //  make objects to store the substrings and counts
        const sObj = {};
        const tObj = {};
        for (let i = 0; i < s.length; i++) {
            if (sObj[s[i]] === undefined) {
                sObj[s[i]] = 1;
            } else {
                sObj[s[i]] += 1;
            }
        }
        
        for (let i = 0; i < t.length; i++) {
            if (tObj[t[i]] === undefined) {
                tObj[t[i]] = 1;
            } else {
                tObj[t[i]] += 1;
            }
        }
        
        
        //. loop the keys of tObj and if any string is not in sObj return that
        const tArrK = Object.keys(tObj);
        const sArrK = Object.keys(sObj);
        for (let i = 0; i < tArrK.length; i++) {
            if (!sArrK.includes(tArrK[i])) {
                return tArrK[i];
            }
        }
        
        
        //.  loop the key,val on tObj and if any val is greater than sObj at val return the key
        for (let key in tObj) {
            if (tObj[key] > sObj[key]) {
                return key;
            }
        }
    }
};

//Edge cases s=== "", s.length is, adding a letter that is already there


//PSEUDO:
// make an sObj of form {s[i]: count} and tObj same
// loop tObj keys and if !sObj.includes(Object.keys(tObj)[i]):
// return Object.keys(tObj)[i]
// loop through Object.values(sObj) under above loop and find the Object.values(tObj[i]) that is greater than s's 




//refactor space tArrK just call
// if (tObj[key] > sObj[key] || sOnbj[key] === undefined) { may get rid of need for first loop


var findTheDifference = function(s, t) {
    // handle edge cases
    if (s === "") {
        return t[0];
    }
    else {
        //  make objects to store the substrings and counts
        const sObj = {};
        const tObj = {};
        for (let i = 0; i < s.length; i++) {
            if (sObj[s[i]] === undefined) {
                sObj[s[i]] = 1;
            } else {
                sObj[s[i]] += 1;
            }
        }
        
        for (let i = 0; i < t.length; i++) {
            if (tObj[t[i]] === undefined) {
                tObj[t[i]] = 1;
            } else {
                tObj[t[i]] += 1;
            }
        }
        
        
        //.  loop the key,val on tObj and if any val is greater than sObj at val return the key
        for (let key in tObj) {
            if (tObj[key] > sObj[key] || sObj[key] === undefined) {
                return key;
            }
        }
    }
};
