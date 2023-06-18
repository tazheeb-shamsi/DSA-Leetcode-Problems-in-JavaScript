//! Q387. Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

const firstUniqChar = function (s) {
  const charCounts = {};
  for (const char of s) {
    if (charCounts.hasOwnProperty(char)) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (charCounts[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
console.log(firstUniqChar("aabb")); // -1
