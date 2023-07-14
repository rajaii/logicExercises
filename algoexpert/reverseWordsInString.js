//MEDIUM:

//o(n time) o(n) space
function reverseWordsInString(string) {
  //extract words
  const w = string.split(' ');
  const words = w.filter((e) => e !== '');

  //extract spaces
  const spaces = [];
  let s = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      s += string[i];
      if (i === string.length - 1) {
        spaces.push(s);
      }
    } else if (i === string.length - 1 && s.length) {
      spaces.push(s);
    } else if (string[i] !== ' ' && s !== '') {
      spaces.push(s);
      s = '';
    }
  }

  //set up reversed array
  const reversed = [];
  let toLoop;
  let other;
  if (string[string.length - 1] === ' ') {
    toLoop = spaces;
    other = words;
  } else {
    toLoop = words;
    other = spaces;
  }

  let even = false;
  if (
    (toLoop === words && string[0] === ' ') ||
    (toLoop === spaces && string[0] !== ' ')
  ) {
    even = true;
  }
  console.log('toLoop', toLoop);
  for (let i = toLoop.length - 1; i >= 0; i--) {
    if (i === 0 && !even) {
      reversed.push(toLoop[i]);
      break;
    }
    if (!even) {
      reversed.push(toLoop[i]);
      reversed.push(other[i - 1]);
      continue;
    } else {
      reversed.push(toLoop[i]);
      reversed.push(other[i]);
    }
  }

  return reversed.join('');
}

//refactor (had used split above there)

function reverseWordsInString(string) {
  //extract words
  const words = [];
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      str += string[i];
      if (i === string.length - 1) {
        words.push(str);
      }
    } else if (i === string.length - 1 && str.length) {
      words.push(str);
    } else if (string[i] === ' ' && str !== '') {
      words.push(str);
      str = '';
    }
  }

  //extract spaces
  const spaces = [];
  let s = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      s += string[i];
      if (i === string.length - 1) {
        spaces.push(s);
      }
    } else if (i === string.length - 1 && s.length) {
      spaces.push(s);
    } else if (string[i] !== ' ' && s !== '') {
      spaces.push(s);
      s = '';
    }
  }

  //set up reversed array
  const reversed = [];
  let toLoop;
  let other;
  if (string[string.length - 1] === ' ') {
    toLoop = spaces;
    other = words;
  } else {
    toLoop = words;
    other = spaces;
  }

  let even = false;
  if (
    (toLoop === words && string[0] === ' ') ||
    (toLoop === spaces && string[0] !== ' ')
  ) {
    even = true;
  }

  for (let i = toLoop.length - 1; i >= 0; i--) {
    if (i === 0 && !even) {
      reversed.push(toLoop[i]);
      break;
    }
    if (!even) {
      reversed.push(toLoop[i]);
      reversed.push(other[i - 1]);
      continue;
    } else {
      reversed.push(toLoop[i]);
      reversed.push(other[i]);
    }
  }

  return reversed.join('');
}
