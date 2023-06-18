//! Q.Given an array nums of size n, return the majority element.
//! TOPIC ==> [Array, Divide & Conquer, Hash Table]

//! Majority Element:The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majorityElement = (nums) => {
  let count = 0;
  let candidate = null;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }

    count += nums[i] === candidate ? 1 : -1;
  }

  return candidate;
};

//! Let's test the function with the given examples:
let nums = [3, 2, 3];
console.log(majorityElement(nums)); // Output: 3

nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums)); // Output: 2
