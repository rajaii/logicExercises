//from leetcode medium: https://leetcode.com/problems/word-subsets/

var wordSubsets = function(A, B) {
    let hasBroken = false;
    let BPassCounter = 0;
    let letterCounter;
    let retArr = [];
    
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
          for (let k = 0; k < B[j].length; k++) {
              letterCounter = A[i].split('');
              if (A[i].includes(B[j][k])) {
                  letterCounter.splice(letterCounter.indexOf(B[j][k], 0));
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
        if (BPassCounter = B.length - 1) {
            retArr.push(A[i])
        } else {
            continue
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
