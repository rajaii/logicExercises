//from leetcode easy: https://leetcode.com/problems/valid-mountain-array/

var validMountainArray = function(A) {
    if (A.length <= 2 || A[0] > A[1]) {
        return false
    } 
    let index;
    for (let i = 0; i < A.length; i++) {
        if (i === A.length - 1 && A[i] >= A[i-1]) {
            return false;
        } else if (i > 0 && A[i] === A[i-1]) {
            return false;
        } else if (i > 1 && A[i] < A[i-1]) {
            index = i;
            break;
        }
    }
    
    for (let i = index; i < A.length; i++) {
        if (A[i] >= A[i-1]) {
            return false
        } else if (i === A.length -1 && A[i] < A[i-1]) {
            return true
        }
    }
};

//?'s: does the steadiness of the increase matter?  will all inputs be populated properly? 
//limits on time/space?
//edge cases: empty array or a.length === 1 or 2, return false


//set index = 0
//loop through A
//if i > 0 and a[i] > a[i-1]:
//continue
//else if i === a.length - 1 and a[i] > a[i-1]:
//return false
//if i> 0 and a[i] < a[i-1]:
//index = i
//break

//set up loop starting at index going to end and check if all descending
//if not descending, return false
//if i === a.length -1 and a[i] < a[i-1]
//return true