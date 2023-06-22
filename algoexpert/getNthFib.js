//EASY:

//solution 1 o(n) time

function getNthFib(n) {
  if (n === 0 || n === 1) {
    return 0;
  }
  //set up variables needed
  let prevs = [0, 1];
  let value = 1;

  //loop to n from 2 tracking the nth value
  for (let i = 2; i < n; i++) {
    value = prevs[0] + prevs[1];
    prevs[0] = prevs[1];
    prevs[1] = value;
  }

  return value;
}
