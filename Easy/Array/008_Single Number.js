//! Q136. Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//! TOPIC ==> [Array, Bit Manipulation]
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

const singleNumber = (nums) => {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};

//!  Let's test the function with the given examples:

let nums = [2, 2, 1];
console.log(singleNumber(nums)); // Output: 1

nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums)); // Output: 4

nums = [1];
console.log(singleNumber(nums)); // Output: 1
