//from leetcode easy: https://leetcode.com/problems/sort-array-by-increasing-frequency/

var frequencySort = function(nums) {
    //set storage obj and sorted array
    let sorted = [];
    let nObj = {};
    let nObjs = [];
    
    //loop nums and set key value pairs for nObj and then push each as an obj in to nObjs
    //and then sort nObjs according to the value
    for (let i = 0; i < nums.length; i++) {
        if (nObj[nums[i]] === undefined) {
            nObj[nums[i]] = 1;
        } else {
            nObj[nums[i]] += 1;
        }
    }
    let iter = 0;
    for (let key in nObj) {
        nObjs[iter] = {};
        nObjs[iter][key] = nObj[key];
        iter += 1;
    }
    
    nObjs.sort((a,b) => {
        if (Object.values(a)[0] === Object.values(b)[0]) {
          return Object.keys(b)[0] - Object.keys(a)[0]
        } else {
       return Object.values(a)[0] - Object.values(b)[0]
        }                 
    });
    
    //set the appropriate numbers in sorted and return sorted
    for (let i = 0; i < nObjs.length; i++) {
        for (let key in nObjs[i]) {
            for (let j = 0; j < nObjs[i][key]; j++) {
                sorted.push(key);
            }
        }
    }
    
    
    return sorted;
    
};

//?'s: limits on time/space?  
//edge cases:nums.length === 1, 

//PSEUDO
//set sorted = [];
//set nObj = {};
//loop nums and make obj of form nums[i]: count
//make Object.values(nObj)
//push into sorted the key of the max value of ^
//[{1:2}, {2:3}, {3:1}]
//sort numObj according to vals
//loop to vals pushing in key, will need to be nested
//return sorted