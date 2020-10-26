//from leetcode easy https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits

var sortByBits = function(a) {
    return a.sort((a, b) => {
        let a1s = a.toString(2).split('').reduce((a,c) => parseInt(a) + parseInt(c), 0);
        let b1s = b.toString(2).split('').reduce((a,c) => parseInt(a) + parseInt(c), 0);
        if (a1s === b1s) {
            return a - b;
        } else {
            return a1s - b1s;
        }
    })
};
        
    
    


//edge cases: arr.length === 1, arr with all same number, arr with all same 1s in bin, 
//?'s: limits on time/space? will we have duplicaes? 

//PSEUDO
//set binObj = []
//set binRep;
//loop a and get bin rep and binObj.push({a[i]: binRep.split()})
//sort the binObj according to the values of each obj with if logic for duplicae values


//return the keys of the sorted array
