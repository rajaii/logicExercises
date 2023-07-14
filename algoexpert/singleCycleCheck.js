//MEDIUM

// o(n) time o(1) space
function hasSingleCycle(array) {
  let numElementsVisited = 0;
  let currentI = 0;
  while (numElementsVisited < array.length) {
    if (numElementsVisited > 0 && currentI === 0) {
      return false;
    }
    numElementsVisited += 1;
    currentI = getNextIdx(currentI, array);
  }

  return currentI === 0;
}

function getNextIdx(currentI, array) {
  let jump = array[currentI];
  const nextIdx = (currentI + jump) % array.length;
  if (nextIdx >= 0) {
    return nextIdx;
  } else {
    return nextIdx + array.length;
  }
}
