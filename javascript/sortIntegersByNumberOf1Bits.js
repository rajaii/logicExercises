//from leetcode easy https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits

var sortByBits = function(a) {
    //set variables to hold binObj's to hold binary reps and original ints for sorting sake,       //and binRep as a variable to use in the loop to get the binaries
    let sorted = [];
    let binObj = [];
    let binRep;
    
    //loop a and push {a[i]: Math.sum(binRep.split())} into binObj
    for (let i = 0; i < a.length; i++) {
       binRep = a[i].toString(2);
       binRep = binRep.split('');
       binRep = binRep.map(i => parseInt(i)).reduce((a,c) => a + c, 0);
       let obj = {};
       obj[a[i]] = binRep;
       binObj.push(obj);
    }
    
    
    //sort binObj accorging to the values of each obj (keys if vals ===) and return the sorted 
    binObj.sort((a,b) => {
        if (Object.values(a)[0] === Object.values(b)[0]) {
            return Object.keys(a)[0] - Object.keys(b)[0];
        } else {
            return Object.values(a)[0] - Object.values(b)[0];
        }
    })
    
    for (let i = 0; i < binObj.length; i++) {
        sorted.push(Object.keys(binObj[i])[0]);
    }
    
    return sorted;
    
    
};

//edge cases: arr.length === 1, arr with all same number, arr with all same 1s in bin, 
//?'s: limits on time/space? will we have duplicaes? 

//PSEUDO
//set binObj = []
//set binRep;
//loop a and get bin rep and binObj.push({a[i]: binRep.split()})
//sort the binObj according to the values of each obj with if logic for duplicae values


//return the keys of the sorted array
