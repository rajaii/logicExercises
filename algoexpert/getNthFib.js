//EASY:

//solution 1 o(n) time o(1) space

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

//solution 2 recusion self done

function getNthFib(n) {
  if (n === 1) {
    return 0;
  }

  function helper(num, prevs, value) {
    if (num === n) {
      return value;
    }

    value = prevs[0] + prevs[1];
    prevs[0] = prevs[1];
    prevs[1] = value;
    num += 1;
    return helper(num, prevs, value);
  }

  return helper(2, [0, 1], 1);
}

//solution 3 recursion from algo expert time 2^n space o(n) (callstack)

function getNthFib(n) {
  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return 1;
  } else return getNthFib(n - 1) + getNthFib(n - 2);
}
