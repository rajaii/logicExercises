//from leetcode easy https://leetcode.com/problems/perfect-number/

var checkPerfectNumber = function(n) {
    //edge cases:
    if (n === 1) {
        return false;
    }
    
    //set the array to push divisors in
    let divisors = [];
    
    //loop to half of n pushing divisors in
    for (let i = 1; i < n / 2 + 1; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }
     console.log(divisors)
    //return true if dvisors add to n or false
    if (divisors.reduce((a,c) => a + c, 0) === n) {
        return true;
    } else {
        return false;
    }
};

//edge cases: 0, 1, 2,3
//?'s: limits on time/space?

//PSEUDO:

//find all divisors of n, and push into divisors arr
//loop to half of n + 1 from 1
//if (n % i === 0) => divisors.push n

//if (divisors.reduce((a,c) => a + c, 0) === n) => return true
//else return false