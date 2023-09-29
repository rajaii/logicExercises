//From Leetcode HARD:

//o(n log n) time o(n) space
var SummaryRanges = function (list = []) {
  this.list = list;
};

/**
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (value) {
  if (!this.list.includes(value)) {
    this.list.push(value);
  }
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
  this.list.sort((a, b) => a - b);
  const ret = [];
  let l = 0;
  let r = 0;
  while (l < this.list.length && r < this.list.length) {
    if (this.list[r + 1] === undefined) {
      if (r === l) {
        ret.push([this.list[r], this.list[r]]);
      } else {
        ret.push([this.list[l], this.list[r]]);
      }
      break;
    }

    if (this.list[r + 1] === this.list[r] + 1) {
      r += 1;
      continue;
    } else if (r === l && this.list[r + 1] !== this.list[r] + 1) {
      ret.push([this.list[r], this.list[r]]);
      r += 1;
      l = r;
    } else if (r !== l && this.list[r + 1] !== this.list[r] + 1) {
      ret.push([this.list[l], this.list[r]]);
      r += 1;
      l = r;
    }
  }
  return ret;
};
