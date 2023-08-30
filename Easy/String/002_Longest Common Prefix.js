//! Q14. Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return "";
  }
  
  let shortest = strs.reduce((a, b) => a.length <= b.length ? a : b);

  for (let i = 0; i < shortest.length; i++) {
    for (let str of strs) {
      if (str[i] !== shortest[i]) {
        return shortest.slice(0, i);
      }
    }
  }
  return shortest;
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]));     //Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));        //Output: ""
