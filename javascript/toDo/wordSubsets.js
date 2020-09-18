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

var wordSubsets = function(A, B) {
    let BStr = ''
    
    let BStrCount = 0;
    let BICount = 0;
    let hasAdded = false;
    for (let i = 0; i < B.length; i++) {
        //may need to move
        BStrCount = 0;
        BICount = 0
        for (let j = 0; j < B[i].length; j++) {
        if (!Bstr.includes(B[i][j])) {
        Bstr += B[i][j];
        } else {
           //loop bStr and count how many in there count how many in B[i] concat however                //many more there are in B[i] in to Bsrt => concat by using a helper fnc
            for (let k = 0; k < Bstr.length; k++) {
                if (Bstr[k] === B[i][j]) {
                    BStrCount += 1;
                }
            } for (let k = j+1; k < B[i].length; k++) {
                if (B[i][k] === B[i][j]) {
                   BICount += 1; 
                }
            }
        }
    }
        } 
    
    
};

//?'s: limits on time/space?  
//edge cases: b[i].length <= 1 || a[i].length <= 1

//refactor Pseudo to improve runtime:
//combine b into 1 string then run single nested loop
//loop B, BSrt
//if not in there add to Bstr
//if so we need to check the count of Bstr
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Bstr should contain all Elements in B except for duplicates between B[i]'s meaning if a 
//B[i] has a char it should not repeat again unless it has multiple occurences in another //B[i]

//break this up into an array
//loop A and check if A[i].includes(BArr[j])
