//from leetcode easy https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation

var countPrimeSetBits = function(l, r) {
    //make a function to check primes
    function isPrime(n) {
        if (n === 1) {
                return false;
            }
        for (let i = 2; i < Math.floor(n / 2) + 1; i++) {
            if (n % i === 0) {
                return false;
            }
        } return true;
}
    //set an array to push binary representations of the values in the range into and return     //value to iterate
    let bin = [];
    let retVal = 0;
    
    //loop from l to r pushing binary string representations of each number into 
     for (let i = l; i < r + 1; i++) {
        bin.push(i.toString(2));
    }
    
    //double loop bin targeting each string value and iterating a counter if they are set
    let pSB = 0;
    for (let i = 0; i < bin.length; i++) {
        for (let j = 0; j < bin[i].length; j++) {
            if (bin[i][j] === '1') {
                pSB += 1;
            }
            
            if (j === bin[i].length - 1) {
                if (isPrime(pSB)) {
                    retVal += 1;
                    pSB = 0;
                } else {
                    pSB = 0;;
                }
            }
        }
    }
    
    return retVal;
};

//edge cases: L === R, L - R distance === 1, 
//?'s:  limits on time/space? Limits on inputs?  negatives in L-R?

//PSEUDO:
//set bin = []
//loop from L to R + 1 pushing i.toString(2) into bin
//set primeSetBits = 0;

//retVal = 0;
//double loop bin
//if bin[i][j]=== '1':
//primeSetBits += 1
//if j === bin[i].length:
//if isPrime(primeSetBits)
//retVal += 1
//primeSetBits = 0
//else 
//primeSetBits = 0

//return retVal



