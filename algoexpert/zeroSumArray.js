//MEDIUM:

//sln 1 o(n ^ 3) time o(1) space

function zeroSumSubarray(nums) {
  if (nums.length === 1 && nums[0] === 0 || nums.includes(0)) {
    return true;
  }
  //forwards dowule loop checking sums of subs
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums.slice(i, j + 1).reduce((a,c) => a + c, 0) === 0) {
        return true;
      }
    }
  }

  return false;
}

//double loop forwards and see if the subarray sums to 0
  //if so return true


//return falase