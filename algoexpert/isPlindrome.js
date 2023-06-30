//EASY

//o[n] time o[n] space
function isPalindrome(string) {
  if (string.split("").reverse().join("") === string) {
    return true;
  }
  return false;
}

//o(n/2) === o(n) time and o(1) space
function isPalindrome(string) {
  const half = Math.floor(string.length) / 2;
  for (let i = 0; i < half; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
