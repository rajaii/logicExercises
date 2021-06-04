// from leetcode easy: https://leetcode.com/problems/maximum-units-on-a-truck

var maximumUnits = function(z, t) {
    //  sort b descending by b[i][1]
    const b = z.sort((a,b) => b[1] - a[1]);
    
    // set the memory to iterate the loop and keep units and last and count
    let c = 0;
    let i = 0;
    let units = 0;
    let last;
    
    //  while loop till c >= t and increment units b[i][0] * b[i][1] and iteratingc     //  and i
    while (c < t && i < z.length) {
        units += b[i][0] * b[i][1];
        last = b[i];
        c += b[i][0];
        i += 1; 
    }
    
    
    //  handle the case where c > t
    while (c > t) {
        units -= last[1];
        c -= 1;
    }
    
    return units;
};

//edge cases: 

//PSEUDO:

//sort boxtypes by b[i][1] descending
//let c = 0
//let i = 0
//let units = 0
//let last;
//while (c < t)
//units += b[i][0] * b[i][1]
//last = b[i]
//c += b[i][0]
//i += 1

//out of loop:
//while (c > t)
//units -= last[1]

//return units