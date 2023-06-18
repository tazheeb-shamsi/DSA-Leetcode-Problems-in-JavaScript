//! Q125. Given a string s, return true if it is a palindrome, or false otherwise.

//! What is Palindrome?
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

const isPalindrome = function (s) {
  const alphanumeric_characters = /[a-z0-9]/;
  let cleanString = s.toLowerCase();
  cleanString = cleanString.replace(/[^a-z0-9]/g, "");
  let reversedString = cleanString.split("").reverse().join("");
  return cleanString === reversedString;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
