//MEDIUM:

//First sln 0(n) time o(n) space

function missingNumbers(nums) {
  const n = new Set();
  for (let i = 0; i < nums.length; i++) {
    n.add(nums[i]);
  }

  //append to ret if missing 
  let len = nums.length + 2;
  const ret = [];
  for (let i = 1; i < len + 1; i++) {
    if (!n.has(i)) {
      ret.push(i);
    }
  }

  return ret;
}

//refactor to o(n) time o(1) space after study
function missingNumbers(nums) {
  // find total of full array and current
  const curTotal = nums.reduce((a,c) => a + c, 0);
  let total = 0;
  for (let i = 1; i < nums.length + 3; i++) {
    total += i;
  }

  //  find the average missing, make halves sum of the left and right halves
  const averageMissing = (total - curTotal) / 2;
  let leftHalfSum = 0;
  console.log(averageMissing)
  for (let i = 1; i < Math.floor(averageMissing) + 1; i++) {
    leftHalfSum += i;
  }

  let rightHalfSum = 0;
  for (let i = Math.floor(averageMissing) + 1; i < nums.length + 3; i++) {
    rightHalfSum += i;
  }
  
  //  find the leftSums in nums and rightSums in nums and subtract from righthalfSums and append to ret
  let leftCurSum = 0;
  let rightCurSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= averageMissing) {
      leftCurSum += nums[i];
    } else {
      rightCurSum += nums[i];
    }
  }

  return [leftHalfSum - leftCurSum, rightHalfSum - rightCurSum];
}