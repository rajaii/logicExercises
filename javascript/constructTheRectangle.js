// from leetcode easy: https://leetcode.com/problems/construct-the-rectangl

var constructRectangle = function(area) {
    //edge cases:
    if (area === 1) {
        return [1,1]
    }  
    
    const lWs = [];
    let mins = [];
    let minDist = Infinity;
    
    for (let i = 1; i < area + 1; i++) {
        if (area % i === 0 && i >= area / i) {
            lWs.push([i,area / i]);
        } else if (area % i === 0 && i <= area / i) {
            lWs.push([area / i, i]);
        }
    }

    //loop lWs and find min dist
    for (let i = 0; i < lWs.length; i++) {
        if ((lWs[i][0] - lWs[i][1]) < minDist) {
            minDist = lWs[i][0] - lWs[i][1];
            mins[0] = lWs[i][0];
            mins[1] = lWs[i][1];
        }
    }
    
    return mins;

};

//PSEUDO:
//set lWs = [];

//loop to Math.floor(area / 2) for odds area /2 for evens
//if (area % i === 0 && i >= area / i) {
//lWs.push([i,area / i]);
//} else if (area % i === 0 && i <= area / i) {
//lWs.push([area / i, i])
//}



//loop lWs and find the pair with min distance
//