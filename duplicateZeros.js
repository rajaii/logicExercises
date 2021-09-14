//from leetcode easy https://leetcode.com/problems/duplicate-zeros/

var duplicateZeros = function(arr) {
    //loop arr
    if (!arr.every(i => i === 0)) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 && i < arr.length - 1) {
            console.log(arr[i+1])
            let temp = arr.slice(i+1);
            arr[i+1] = 0;
            let k = 0;
            if (arr[i+2] !== undefined) {
            for (let j = i + 2; j < arr.length; j++) {
               arr.splice(j,1,temp[k])
               k += 1;         
            }
          }
            i+=1
        }
        
    }
    }
};

//edge cases: length === 1 => return arr; 

//PSEUDO:
//loop arr
//if arr[i] === 0:
//temp = arr[i+1]
//arr[i+1] = 0
//loop nested (starting at arr[i+2]) setting temp to arr[i+1]

//i += 1

// [8,5,0,9,0,3,4,7]  9,0,3,4,7]
// [8,5,0,0,9,0,3,4] 3,4]
// [8,5,0,0,9,0,0,3]