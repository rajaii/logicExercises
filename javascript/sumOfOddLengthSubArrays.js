//from leetcode easy https://leetcode.com/problems/sum-of-all-odd-length-subarrays

var sumOddLengthSubarrays = function(arr) {
    //handle edge case 
    if (arr.length === 1) {
        return arr[0]
    }
    //set subs and enter whole array into subs
    let subs = [];
    if (arr.length % 2 === 1) {
        subs.push(arr);
    }
    
    //loop array and push each individual as n array into subs
    for (let i = 0; i < arr.length; i++) {
        subs.push([arr[i]]);
    }
    
    //run a while loop with a nested for loop slicing all odd subarrays and pushing in subs
    let j = 2;
    while (j < arr.length - 1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i+j] != undefined && arr.slice(i, i+j+1).length % 2 === 1) {
                subs.push(arr.slice(i, i+j+1))
            }
        }
        j += 2;
    }
    
    //get the totals of subs and return it
    let totals = subs.map(ar => ar.reduce((a,c) => a + c))
    return totals.reduce((a,c) => a + c)
    
};

//edge cases: arr.length = 1
//?'s: limits on time/space, 

//PSEUDO
//set subs = []
//if arr.length % 2 === 1, subs.push(arr)
//loop array pushing array[i] into subs

//while loop keeping track of j starting at 2 and incrementing it by 2
//nest  a for loop that goes through and slices all odd subarrays and pushes that into subs
//let j = 2
//While j < arr.length - 1
//loop array pushing array.slice(i, i + j) //all the way until i+j === arr.length
//if (arr[i + j] != undefined && arr.slice(i, i+j).length % 2 === 1)
//subs.push(arr.slice(i, i+j))
//j += 2

