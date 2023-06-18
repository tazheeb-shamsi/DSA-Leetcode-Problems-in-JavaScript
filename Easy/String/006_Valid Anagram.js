//! Q242. Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//! What is Anagram?
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isAnagram = function (s, t) {

    if (s.length !== t.length) {
        return false;
    }

    const charCounts = {};
    for (const char of s) {
        if (charCounts.hasOwnProperty(char)) {
            charCounts[char]++;
        } else {
            charCounts[char] = 1;
        }
    }

    for (const charr of t) {
        if (!charCounts.hasOwnProperty(charr)) {
            return false;
        } else {
            charCounts[charr]--;
            if (charCounts[charr] < 0) {
                return false;
            }
        }
    }

    return true;

};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false