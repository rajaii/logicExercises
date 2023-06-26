//EASY:

//solution 1 0(n * s) (where s is the length of avg length of strings[i]) runtime === o(n) and o(n) space

function commonCharacters(strings) {
  if (strings.length === 1) {
    return strings[0].split("");
  }
  //set the array to push into and the one with the charachters to check
  const charsToCheck = strings[0].split("");
  const commonSet = new Set();

  //loop charsToCheck nested looping strings and checking all chars
  for (let i = 0; i < charsToCheck.length; i++) {
    for (let j = 1; j < strings.length; j++) {
      if (!strings[j].includes(charsToCheck[i])) {
        break;
      }

      if (j === strings.length - 1) {
        commonSet.add(charsToCheck[i]);
      }
    }
  }

  const commons = [];
  commonSet.forEach((e) => commons.push(e));

  return commons;
}

//refactor after video same runtime different strategy
function commonCharacters(strings) {
  if (strings.length === 1) {
    return strings[0].split("");
  }

  const charCounts = {};
  for (let i = 0; i < strings.length; i++) {
    const charsToCheck = strings[i].split("");
    const commonSet = new Set();

    for (let j = 0; j < charsToCheck.length; j++) {
      commonSet.add(charsToCheck[j]);
    }

    commonSet.forEach((e) => (charCounts[e] = charCounts[e] + 1 || 1));
  }

  const commons = [];
  for (let key in charCounts) {
    if (charCounts[key] === strings.length) {
      commons.push(key);
    }
  }

  return commons;
}

//final refactor same as mine but running on smallest string and thus less iterations to run
function commonCharacters(strings) {
  let smallest;
  let smCount = Infinity;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length < smCount) {
      smCount = strings[i].length;
      smallest = strings[i];
    }
  }
  //set the array to push into and the one with the charachters to check
  const charsToCheck = smallest.split("");
  const commonSet = new Set();

  //loop charsToCheck nested looping strings and checking all chars
  for (let i = 0; i < charsToCheck.length; i++) {
    for (let j = 0; j < strings.length; j++) {
      if (!strings[j].includes(charsToCheck[i])) {
        break;
      }

      if (j === strings.length - 1) {
        commonSet.add(charsToCheck[i]);
      }
    }
  }

  const commons = [];
  commonSet.forEach((e) => commons.push(e));

  return commons;
}
