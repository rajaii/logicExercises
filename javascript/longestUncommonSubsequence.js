//from leetcode easy:

//o(1) time o(1)space
var findLUSlength = function (a, b) {
  if (a === b) {
    return -1;
  }

  if (a.length !== b.length) {
    return Math.max(a.length, b.length);
  } else return a.length;
};
