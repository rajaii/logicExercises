//EASY

//first sln o (n log n) runtime 0(1) space (not incluting input array)
function minimumWaitingTime(queries) {
  //  sort array and set the vars needed
  queries.sort((a, b) => a - b);
  let prevSum = 0;
  let newSum = 0;
  
  console.log(queries)
  //  loop to array.length - 2 incrementing prevSum
  for (let i = 0; i < queries.length - 1; i++) {
    newSum += (prevSum + queries[i]);
    prevSum += queries[i];
  }

  return newSum || 0;
}