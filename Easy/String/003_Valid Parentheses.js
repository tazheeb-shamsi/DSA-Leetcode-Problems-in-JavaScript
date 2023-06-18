//! Q20. Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:                           // Example 2:
// Input: s = "()"                      // Input: s = "()[]{}"
// Output: true                         // Output: true

function isValid(s) {
  const open_brackets = { "(": ")", "{": "}", "[": "]" };
  const brackets_stack = [];
  for (const c of s) {
    if (open_brackets.hasOwnProperty(c)) {
      brackets_stack.push(c);
    } else if (!brackets_stack || open_brackets[brackets_stack.pop()] !== c) {
      return false;
    }
  }
  return brackets_stack.length === 0;
}

console.log(isValid("()"));         //Output: true
console.log(isValid("()[]{}"));     //Output: true
console.log(isValid("(]"));         //Output: false