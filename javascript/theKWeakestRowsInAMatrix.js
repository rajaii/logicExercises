//from leetcode easy: https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/submissions/

var kWeakestRows = function(mat, k) {
    //set counter object to count soldiers and then put it into a sortable array sorted         //based off of the values
    let counterObj = {};
    for (let i = 0; i < mat.length; i++) {
        counterObj[i] = mat[i].reduce((a,c) => a + c, 0);
    }
    console.log(counterObj)
    let sortable = [];
    for (let key in counterObj) {
        sortable.push([parseInt(key, 10), counterObj[key]]);
    }
    sortable.sort((a, b) => a[1] - b[1]);
    console.log(sortable)
    
    //set return array and push into it by looping sortable to k and pushing into it with a     //nested while loop with logic to handle cases of equal soldiers
    let retArr = [];
    for (let i = 0; i < k; i++) {
        if (i != k - 1 && sortable[i][1] === sortable[i+1][1]) {
            while (sortable[i + 1][1] === sortable[i][1]) {
               if (sortable[i + 1][0] > sortable[i][0]) {
                   retArr.push(sortable[i][0])
                   break;
               } else {
                  retArr.push(sortable[i+1][0])
                  retArr.push(sortable[i][0])
                  i += 2; 
               } 
         }
        } else {
            retArr.push((sortable[i][0]));
        }
    }
    
    
    return retArr;
};

//?'s: 
//edge cases: m === 1, k=== 1, k === m === 1;


//set counterObj = {}
//loop mat setting counterObj[i] to the sum of mat[i] 
//counterObj[i] = mat[i].reduce((a,c) => a + c, 0)

//let retArr = [];
//let sortable = [];
//for (let key in counterObj)
//sortable.push([parseInt(key, 10), counterObj[key]])
//sortable.sort((a,b) => a[1] - b[1])


//loop to  k for (let i = 0; i < k; i++)
//retArr.push(sortable[i][0])
//return retArr

//handle the cases where equal amount of soldiers.
//set while (sortable[i + 1][1] === sortable[i][1])
//if (sortable[i + 1][0] > sortable[i][0])
//retArr.push(sortable[i][0])
//continue
//else retArr.push(sortable[i+1][0])
//retArr.push(sortable[i][0])
//i+=2
//break