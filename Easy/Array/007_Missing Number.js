//! Q268. Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
//! TOPIC ==> [Array, Math, Hash Table, 3+]

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

const missingNumber = (nums) => {
  const n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
};

//! Let's test the function with the given examples:

let nums = [3, 0, 1];
console.log(missingNumber(nums)); // Output: 2

nums = [0, 1];
console.log(missingNumber(nums)); // Output: 2

nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums)); // Output: 8
