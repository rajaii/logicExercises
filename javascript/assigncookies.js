//From Leetcode EASY

//o(c * k) time o(k) space

var findContentChildren = function (kids, cookies) {
  const kidCount = {};
  for (let i = 0; i < kids.length; i++) {
    kidCount[kids[i]] = kidCount[kids[i]] + 1 || 1;
  }

  cookies.sort((a, b) => a - b);
  kids.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < cookies.length; i++) {
    for (let j = 0; j < kids.length; j++) {
      if (cookies[i] >= kids[j] && kidCount[kids[j]] > 0) {
        count += 1;
        kidCount[kids[j]] -= 1;
        break;
      }
    }
  }

  return count;
};
