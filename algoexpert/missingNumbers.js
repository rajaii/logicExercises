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