//  from leetcode easy: https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal

var areAlmostEqual = function(s1, s2) {
    //  handle edge cases
    if (s1 === s2) {
        return true;
    }
    
    //  set an object in memory to keep track of the diffs by index and s value
    let diffCount = 0;
    let diffs = {};
    for (let i = 0; i < s1.length; i++) {
     if (s1[i] !== s2[i]) {
     diffCount += 1;
     diffs[i] = [s1[i], s2[i]];
    }
    }
    
    //  if more than 2 different return false
    if (diffCount > 2) {
    return false;
    }
    
    //  loop diffs and push the swap values into arrays
    let swap1 = [];
    let swap2 = [];
    for (let key in diffs) {
     swap1.push(diffs[key][0])

    }
    for (let key in diffs) {
     swap2.push(diffs[key][1])

    }
    
    
    //  swap the diffs on each s and check if resultant s's are equal
    let test1 = s1.split('');
    let test2 = s2.split('');
    let i = swap1.length - 1;
    for (let key in diffs) {
    test1.splice(key, 1, swap1[i]);
    i -= 1;
    }
    
    if (test1.join('') === s2) {
    return true;
    }
    i = swap2.length - 1;
    for (let key in diffs) {
    test2.splice(key, 1, swap2[i]);
    i -= 1;
    }

    if (test2.join('') === s1) {
    return true;
    }
    
    
    
    return false;
};

//edge cases: 1 length, 
//?'s: limits on time, limits on space? 

//PSEUDO:
//if (s1 === s2) {
//return true
//}
//diffCount = 0;
//diffs = {index: str}
//loop once to the length
//  if (s1[i] !== s2[i]) {
//  diffCount += 1;
//  diffs[i] = [s1[i], s2[i]]
//}

//if (diffCount > 2) {
//return false
//}
//let swap1 = []
//let swap2 = []
//for (let key in diffs) {
//  swap1.push(diffs[key][0])
//  
//}
//for (let key in diffs) {
//  swap2.push(diffs[key][1])
//  
//}
//swap diffs on each str and check if the resultant strings are equal
//let test1 = s1.split('');
//let test2 = s2.split('');
//let i = 0;
//for (let key in diffs) {
//test1 = test1.splice(key, 1, swap1[i]);
//i += 1;
//}
//if (test1.join('') === s2) {
//return true
//}
//i = 0;
//for (let key in diffs) {
//test2 = test2.splice(key, 1, swap2[i]);
//i += 1;
//}

//if (test2.join('') === s1) {
//return true
//}

//return false
