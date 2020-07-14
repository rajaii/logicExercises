//from hackerRank easy https://www.hackerrank.com/challenges/ctci-array-left-rotation

function rotLeft(a, d) {
    let retVal = ''
   
    for (let i = 0; i < d; i++) {
        let first = a[0];
        a.splice(0,1);
        a.push(first);
    }  
    console.log(a)

    for (let i = 0; i < a.length; i++) {
            if (i === a.length - 1) {
                retVal += `${a[i]}`
            } else {
            retVal += `${a[i]} `
            }
        }


    return a

}
//?'s limits on space/time? returning not array but integer list? why 2 numsin input?
//edge cases, empty array, 2 items in array rotations => without looping, just use mod, ///1 item in array or all same item=> return the int,


//loop through d, take off top and pop to end 