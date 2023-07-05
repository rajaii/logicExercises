//EASY:

//Brute force o(n^2) time o(n) space:
function firstNonRepeatingCharacter(string) {
  //double loop to check
  const dupes = new Set();
  for (let i = 0; i < string.length; i++) {
    if (i === string.length - 1 && !dupes.has(string[i])) {
      return i;
    }
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        dupes.add(string[i]);
        continue;
      }

      if (j === string.length - 1 && !dupes.has(string[i])) {
        return i;
      }
    }
  }

  return -1;
}

//o(n) time o(n) space
function firstNonRepeatingCharacter(string) {
  //loop making object of counts and indexs
  const countsAndIndexs = {};
  for (let i = 0; i < string.length; i++) {
    if (countsAndIndexs[string[i]]) {
      countsAndIndexs[string[i]][0] += 1;
      countsAndIndexs[string[i]][1] = i;
    } else {
      countsAndIndexs[string[i]] = [1, i];
    }
  }

  //loop making indexs array from ones with 1 count
  const indexs = [];
  for (let key in countsAndIndexs) {
    if (countsAndIndexs[key][0] === 1) {
      indexs.push(countsAndIndexs[key][1]);
    }
  }
  let ret;
  indexs.length ? (ret = Math.min(...indexs)) : (ret = -1);
  return ret;
}

//o(n) time o(1) space
function firstNonRepeatingCharacter(string) {
  //loop making object of counts
  const counts = {};
  for (let i = 0; i < string.length; i++) {
    counts[string[i]] = counts[string[i]] + 1 || 1;
  }

  //loop checking
  for (let i = 0; i < string.length; i++) {
    if (counts[string[i]] === 1) {
      return i;
    }
  }

  return -1;
}
