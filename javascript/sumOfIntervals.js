//from codewars 4kyu https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

function sumIntervals(intervals){
    let iCounts = []
    for (let i = 0; i < intervals.length; i++) {
      for (let j = intervals[i][0] + 1; j < intervals[i][1] + 1; j++) {
        if (!iCounts.includes(j)) {
        iCounts.push(j)
        }
      }
    } 
    return iCounts.length
  }