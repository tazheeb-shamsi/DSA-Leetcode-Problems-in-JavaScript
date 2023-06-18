//! Q171. Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:
// Input: columnTitle = "A"
// Output: 1

// Example 2:
// Input: columnTitle = "AB"
// Output: 28

// Example 3:
// Input: columnTitle = "ZY"
// Output: 701

const titleToNumber = (columnTitle) =>
  columnTitle
    .split("")
    .reduce((result, char) => result * 26 + char.charCodeAt(0) - 64, 0);

console.log(titleToNumber("A")); // Output: 1
console.log(titleToNumber("AB")); // Output: 28
console.log(titleToNumber("ZY")); // Output: 701
