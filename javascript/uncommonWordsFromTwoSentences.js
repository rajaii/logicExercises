//from leetCode easy https://leetcode.com/problems/uncommon-words-from-two-sentences/

var uncommonFromSentences = function(A, B) {
    //set the return array and object variables
    let retArr = [];
    let aObj = {};
    let bObj = {};
    let a = A.split(' ');
    let b = B.split(' ');
    
    //loop a and b and set the object values
    for (let i = 0; i < a.length; i++) {
        if (aObj[a[i]] === undefined) {
            aObj[a[i]] = 0;
        } else {
            aObj[a[i]] += 1;
        }
    }
    
    for (let i = 0; i < b.length; i++) {
        if (bObj[b[i]] === undefined) {
            bObj[b[i]] = 0;
        } else {
            bObj[b[i]] += 1;
        }
    }
    
    //loop both objects and if the other object doesn't have the key and the key val is 0,       //push the key into retArr
    
    for (let key in aObj) {
        if(bObj[key] === undefined && aObj[key] === 0) {
            retArr.push(key)
        }    
    }
    
    for (let key in bObj) {
        if(aObj[key] === undefined && bObj[key] === 0) {
            retArr.push(key)
        }    
    }
    
    return retArr;
};

//?'s: what to do if A or b === '', assume just skip along?  limits on time/space?
//edge cases:  both '', 

//set retArr = [];
//loop and make an object out of each if A[i] === undefined => a[i] = 0 else a[i] += 1
//loop both object and if otherObj[key] === undefined && thisObj[key] === 0, push key into retArr
//return retArr;