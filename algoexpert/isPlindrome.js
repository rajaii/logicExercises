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

//recursion
function isPalindrome(string) {
  if (string.length <= 1) {
    return true; // Base case: empty string or single character is a palindrome
  }

  if (string[0] !== string[string.length - 1]) {
    return false; // First and last characters don't match, not a palindrome
  }

  // Recursively check the substring without the first and last characters
  return isPalindrome(string.slice(1, string.length - 1));
}

//recursion o(n) time o(n) space bc call Stack
function isPalindrome(string) {
  if (string.length <= 1) {
    return true; // Base case: empty string or single character is a palindrome
  }

  if (string[0] !== string[string.length - 1]) {
    return false; // First and last characters don't match, not a palindrome
  }

  // Recursively check the substring without the first and last characters
  return isPalindrome(string.slice(1, string.length - 1));
}
