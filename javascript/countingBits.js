//  from leetcode medium https://leetcode.com/problems/counting-bits/

var countBits = function(num) {
    //  set the array that will save the counts
    const counts = [];
    
    //  loop num thus nested looping the binary string of i counting 1's and pushing the           //  counter into counts
    for (let i = 0; i < num + 1; i++) {
        let counter = 0;
        for (let j = 0; j < i.toString(2).length; j++) {
            if (j === i.toString(2).length - 1) {
                if (i.toString(2)[j] === '1') {
                counter += 1;
            } counts.push(counter)
            } else if (i.toString(2)[j] === '1') {
                counter += 1;
            }
        }
    }
    
    return counts;
};

//?'s: limits on time/space?
//edge cases: 

//set counts = []
//loop to num
//set counter = 0;
//nested loop i.toString(2) counting '1's and incrementing counter
//counts.push(counter) at end of loop

//return counts