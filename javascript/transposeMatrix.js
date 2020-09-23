//from leetcode easy https://leetcode.com/problems/transpose-matrix/

var transpose = function(a) {
    //set array to return in and loop to a[0].length setting empty arrays in there so arr is
    //of right size
    let retArr = [];
    for (let i = 0; i < a[0].length; i++) {
        retArr.push([]);
    }   
    
    //loop a tagging inner loop and pushing the transposed values into retArr
    for (let i = 0; i < a[0].length; i++) {
        for (let j = 0; j < a.length; j++) {
            retArr[i].push(a[j][i])
        }
    }
    
    return retArr
};

//PSEUDO/planning:

//?'s:limits on time/space?
//edge cases: a has 1 or a[0] has 1 or both

//[[2,4,1],[-10,5,11],[18,-7,6]] => [[2,-10,-18],[4,5,-7],[-1,11,6]]
//set retArr = []
//loop to a[0].length to set empty arrays in retArr so is of right size 


//loop on a inner array
//double loop to tag a[i]
//for (let j = 0; j < a.length; j++)
//retArr[i].push(a[j][i])

//[1,2,3],[4,5,6]
//[1,4][2,5][3,6]
//amount of inner arrays you have === length of inner retArr
//length of retArr === length of inner a's