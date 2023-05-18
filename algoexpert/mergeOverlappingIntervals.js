//MEDIUM

//first solution o(n log n) time o(n) space

function mergeOverlappingIntervals(intervals) {
  //sort intervals and set the merged to merge into
  intervals.sort((a, b) => a[0] - b[0]);
  if (intervals[0][1] >= intervals[intervals.length - 1][1]) {
    return [intervals[0]];
  }
  const merged = [];
  //loop intervals and merge according to specs
  let i = 0;
  while (i < intervals.length) {
    if (intervals[i + 1] && intervals[i + 1][0] <= intervals[i][1]) {
      const toMerge = [intervals[i][0]];
      if (
        intervals[i][1] > intervals[i + 1][0] &&
        intervals[i][1] > intervals[i + 1][1]
      ) {
        toMerge[1] = intervals[i][1];
      } else {
        toMerge[1] = intervals[i + 1][1];
      }
      i += 1;
      while (intervals[i + 1] && intervals[i + 1][0] <= intervals[i][1]) {
        if (intervals[i + 1][1] < intervals[i][1]) {
          i += 1;
          continue;
        }
        toMerge[1] = intervals[i + 1][1];
        i += 1;
      }
      i += 1;
      merged.push(toMerge);
    } else {
      merged.push(intervals[i]);
      i += 1;
    }
  }

  return merged;
}
