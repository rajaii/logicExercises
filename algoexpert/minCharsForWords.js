//MEDIUM:

//o(l * n) runtime where l is the length of each word === o(n), o(c) space where c is total min chars im min char list === o(n)
function minimumCharactersForWords(words) {
  //set the memory to track and return
  const chars = [];
  const s = new Set();

  //loop all words and track in objects counts
  for (let i = 0; i < words.length; i++) {
    chars.push({});
    for (let j = 0; j < words[i].length; j++) {
      chars[chars.length - 1][words[i][j]] =
        chars[chars.length - 1][words[i][j]] + 1 || 1;
    }
  }

  //  loop all objects of counts and set in a main object the min counts
  let minCharacters = [];
  let minTracker = {};

  for (let i = 0; i < chars.length; i++) {
    for (let char in chars[i]) {
      if (!minTracker[char]) {
        minTracker[char] = chars[i][char];
        continue;
      }

      if (chars[i][char] > minTracker[char]) {
        minTracker[char] = chars[i][char];
      }
    }
  }

  //loop minTracker and push in the array each char needed
  for (let char in minTracker) {
    for (let i = 0; i < minTracker[char]; i++) {
      minCharacters.push(char);
    }
  }

  return minCharacters;
}

//Got this from algo expert video theory, my code using their explanation, basically same as what I did with different twist
function minimumCharactersForWords(words) {
  let max = {};

  for (let i = 0; i < words.length; i++) {
    let curObj = {};
    for (let j = 0; j < words[i].length; j++) {
      curObj[words[i][j]] = curObj[words[i][j]] + 1 || 1;
    }

    for (let key in curObj) {
      if (!max[key]) {
        max[key] = curObj[key];
      } else {
        max[key] = Math.max(max[key], curObj[key]);
      }
    }
  }

  const ret = [];
  for (let key in max) {
    for (let i = 0; i < max[key]; i++) {
      ret.push(key);
    }
  }
  return ret;
}
