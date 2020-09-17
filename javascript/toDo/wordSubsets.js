//from leetcode medium: https://leetcode.com/problems/word-subsets/

var wordSubsets = function(A, B) {
    let hasBroken = false;
    let BPassCounter = 0;
    let letterCounter;
    let retArr = [];
    
    for (let i = 0; i < A.length; i++) {
        BPassCounter = 0;
        for (let j = 0; j < B.length; j++) {
        letterCounter = A[i].split('');
          for (let k = 0; k < B[j].length; k++) {  
              if (letterCounter.includes(B[j][k])) {
                  delete letterCounter[letterCounter.indexOf(B[j][k])]
                  continue; 
              } else {
                  hasBroken = true;
                  break;
              }
          } 
            if (hasBroken) {
                hasBroken = false;
                break;
            } else {
                BPassCounter += 1;
            }
        }
        if (BPassCounter === B.length) {
            retArr.push(A[i])
        } 
    }
    return retArr
};

//?'s: limits on time/space?  
//edge cases: b[i].length <= 1 || a[i].length <= 1

//set hasBroken = false
//set BPasscounter = 0
//set letterCounter;
//set retArr = []


//loop through A
//loop through B
//loop B[j]

//letterCounter = A[i].split('')
//if a[i].includes(b[j][k]) && letterCounter.includes(b[j][k])
    //letterCounter.splice(indexOf(b[j][k],0))
    //continue
//else hasBroken = true, break

//outer B block
//if hasBroken => hasBroken = false;  break
//else BPassCounter += 1

//outer a block
//if counter = B.length - 1 
//retArr.push(a[i])
//else continue

//return retArr

