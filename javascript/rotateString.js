//from leetcode easy https://leetcode.com/problems/rotate-string

var rotateString = function(A, b) {
    //handle edge cases
    if (A === b) {
        return true;
    }

    //split A into an array
    let a = A.split('');
    
    //loop a shifting on a and checking if it's joined string === b, thus returning true if     //this is ever so
    for (let i = 0; i < a.length; i++) {
        a.push(a[0]);
        a.shift();
        if (a.join('') === b) {
            return true;
        }
    }
    
    return false;
};

//Edge cases: empty a or b, 1 length a or b.  length a != length b
//?'s: limits on time/space?

//PSEUDO:
//let a = A.split('')
//loop a:
//a.push(a[i])
//a.shift()
//if a.join('') === b
//return true

//outside of loop return false