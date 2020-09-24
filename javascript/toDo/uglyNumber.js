//from leetcode easy https://leetcode.com/problems/ugly-number/submissions/

var isUgly = function(n) {
    //handle edge cases
    if ((isPrime(n) && n > 5) || n < 1) {
        return false;
    }
    if (n === 1) {
        return true;
    }
    //set temp variable to tag the quotient as we divide by primes in the loop to attain 
    //prime factorization, and then loop to n checking if i is prime and divisible by n.         //if so and if i > 5 return false, else while temp is divisible by i keep dividing and       //attaining prime factors
    // let primeFactors = [];
    let temp = n;
    for (let i = 2; i < n; i++) {
        if (isPrime(i) && n % i === 0) {
            if (i > 5) {
                return false;
            } else {
                while (temp % i === 0) {
                    // primeFactors.push(i);
                    temp = temp / i;
                    }
                }
            }
        }
    
    //if made it through the loop then the number is ugly
    return true;

    //helper function to check if n is prime
    function isPrime(num) {
        if (num === 1) {
            return false
        } else if (num === 2) {
            return true
        } else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false
                }
            }
        }
        return true
    }
};

//?'s: limits on time or space?
//edge cases: 1 ,0 


//make helper isPrime function to check if divisor is prime
//find prime factorization of number
//set primeFactors = []
//loop from 2 to n
//if (isPrime(i) && n % i === 0) 
//if (i > 5)
//return false
//else
//let temp = n
//while (temp % i === 0) {
    //primeFactors.push(i)
    //may not need ^
    //temp = n / i
//console.log(primeFactors)
//return true

//if this includes anything besided 2,3,5 return false

