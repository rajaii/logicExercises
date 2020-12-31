//from leetcode easy: https://leetcode.com/problems/relative-sort-array/

var relativeSortArray = function(arr1, arr2) {
    //edge cases
    if (arr2.length <= 0) {
        return arr1.sort((a,b) => a-b );
    }
    
    //set the empty arrays that will house the new sorted data
    let sorted = [];
    let rest = [];
    
     //set a1Obj to be of the form {arr1[i]: count}
     for (let i = 0; i < arr1.length; i++) {
        if (a1Obj[arr1[i]] === undefined) {
            a1Obj[arr1[i]] = 1;
        } else {
            a1Obj[arr1[i]] += 1;
        }
     }
     
     for (let i = 0; i < arr2.length; i++) {
         if (Object.keys(a1Obj).includes(arr2[i].toString())) {
             for (let j = 0; j < a1Obj[arr2[i]]; j++) {
         sorted.push(arr2[i]);
     }
         }
     }
    
    //loop arr1 pushing into rest arr1[i] if its value does not exist in arr2
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            rest.push(arr1[i]);
        }
    }
    
    //sort rest
    rest.sort((a,b) => a - b);
    
    
    return sorted.concat(rest);
};

//edge cases: arr2.lengh == 0 => return arr1.sort, all same in array 1 or all but 1
//questions: limits on time, space? sort array 1 ascending if arr2.length == 0?

//PSEUDO:
//set sorted = []
//set rest = []
//loop array 2
//subloop array1
//if arr1[j] === arr2[i]:
//sorted.push(arr1[j])

//loop arr1:
//if (!arr2.includes(arr1[i])):
//rest.push(arr1[i])

//rest.sort((a,b) => a - b)
//return sorted.concat(rest)