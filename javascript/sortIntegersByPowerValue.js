//from leetcode Medium https://leetcode.com/problems/sort-integers-by-the-power-value

var getKth = function(lo, hi, k) {
    //set the array to push the int and power into
    let powers = [];
    
    //loop from low to high running while loop on each to run the math until int is 1
    for (let i = lo; i < hi + 1; i++) {
        let power = 0;
        let num = i;
        while (num > 1) {
            if (num % 2 === 0) {
            num = num / 2;
            power += 1;
            } else {
            num = 3 * num + 1;
            power += 1;
            }
        }
        powers.push([i,power]);
    }
    
    //sort powers
    powers.sort((a,b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]; 
    } else {
        return a[1] - b[1]; 
    }
    });
    
    return powers[k-1][0];
};

//edge cases: 
//?'s: limits on time/space?

//PSEUDO:
//set powers = []
//loop from low to high running while loop on each to run the math until they are 1
//for (let i = lo; i < hi + 1; i++):
//let power = 0
//let num = i
//while (num != 1):
//if (num % 2 === 0):
//num = num / 2
//power +=1
//else:
//num = 3 * num + 1
//power += 1
//outside of while loop
//powers.push([i,power])

//powers.sort((a,b) => {
    //if (a[1] === b[1]) {
      //return a[0] - b[0] 
    //} else {
        //return a[1] - b[1] 
//}
//})

//return powers[k-1][0]