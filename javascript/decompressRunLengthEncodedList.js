//from leetcode easy https://leetcode.com/problems/decompress-run-length-encoded-list/

var decompressRLElist = function(nums) {
    //set the array to concatenate to and return in the end
    const decompressed = [];
    
    //loop nums pushing val into decompressed freq times
    for (let i = 0; i < nums.length; i += 2) {
        console.log(i)
        for (let j = 0; j < nums[i]; j++) {
            decompressed.push(nums[i+1]);
        }
    }
    
    return decompressed;
};

//edge cases: 
//?'s: limits on time/space?

//PSEUDO:
//const decompressed = [];
//loop nums i += 2
//loop to nums[i + 1]
//decompressed.push(nums[i])

//return decompressed