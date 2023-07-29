//MEDIUM

//o(n log n) time o(1) space almost had it but had to look at video bc kept losing it
function sweetAndSavory(dishes, target) {
  let ret = [0, 0];
  dishes.sort((a, b) => a - b);
  let left = 0;
  let right = dishes.length - 1;
  let diff = Infinity;

  while (dishes[left] < 0 && dishes[right] > 0) {
    const sum = dishes[left] + dishes[right];
    if (sum > target) {
      right -= 1;
    } else {
      const curDiff = target - sum;
      if (curDiff < diff) {
        diff = curDiff;
        ret = [dishes[left], dishes[right]];
      }
      left += 1;
    }
  }
  return ret;
}
