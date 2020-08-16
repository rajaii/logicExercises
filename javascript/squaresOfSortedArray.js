//from leetcode easy https://leetcode.com/problems/squares-of-a-sorted-array/

var sortedSquares = function(A) {
    return A.map(n => n ** 2).sort((a,b) => a - b)
};

//?'s: limits on time/space? 
//edge cases: 1 in array duplicates, duplicates on ends

//array.map quare each n.sort()

//[16,1,0,9,100]
