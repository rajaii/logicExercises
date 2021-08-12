//  from leetcode easy https://leetcode.com/problems/distribute-candies

var distributeCandies = function(candyType) {
    //  loop candyType and make an obj of form {type: count}
    let candyObj = {};
    for (let i = 0; i < candyType.length; i++) {
        if (candyObj[candyType[i]] === undefined) {
            candyObj[candyType[i]] = 1;
        } else {
            candyObj[candyType[i]] += 1;
        }
    }
    const total = Object.values(candyObj).reduce((a,c) => a + c, 0) / 2;
    if (Object.values(candyObj).length < total) {
        return total - (total - Object.values(candyObj).length)
    } else {
        return total;
    }
    
    
};

//edge cases:

//PSEUDO:
//loop candyType and make candyObj {type: count}

//return the sum of the counts
//len / 2 / number types