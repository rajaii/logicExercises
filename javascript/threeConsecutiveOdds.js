//from leetcode easy: https://leetcode.com/problems/three-consecutive-odds/

var threeConsecutiveOdds = function(arr) {
    //return false if arr doesn't have 3 vals
    if (arr.length < 3) {
        return false;
    }
    //loop array checking if there are 3 consecutive odds, thus returning true if so
    for (let i = 0; i < arr.length; i++) {
        //break out at that point to avoid errors; three consecs don't exist anyway
        if (i === arr.length - 2) {
            break;
        } else if (arr[i] % 2 != 0 && arr[i+1] % 2 != 0 && arr[i+2] % 2 != 0) {
            return true;
        }
    }
    
    //if made it through the loop, return false
    return false;
};

//edge cases arr.length < 3 , or at arr[arr.length -3] or above just break
//?'s: limits on time/space?


//loop array
//if i === arr.length - 3 => break
//if arr[i] % 2 != 0 && arr[i+1] != 0 && arr[i+2] != 0:
//return true

//return false