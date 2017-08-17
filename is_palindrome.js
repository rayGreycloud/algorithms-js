// Is a string a palindrome?
// Returns first character of string
var firstCharacter = function(str) {
  return str.slice(0, 1);
};
// Returns last character of string
var lastCharacter = function(str) {
  return str.slice(-1);
};
// Returns string remainder
var middleCharacters = function(str) {
  return str.slice(1, -1);
};
// Returns true if string is palindrome
var isPalindrome = function(str) {
  // base case #1
  if (str.length <= 1) {
    return true;
  }
  // base case #2
  if (firstCharacter(str) !== lastCharacter(str)) {
    return false;
  }
  // recursive case
  return isPalindrome(middleCharacters(str));
};

var checkPalindrome = function(str) {
  console.log(`Is this word a palindrome? ${str}`);
  console.log(isPalindrome(str));
};
// Test cases
checkPalindrome("a"); // true
checkPalindrome("motor"); // false
checkPalindrome("rotor"); // true
