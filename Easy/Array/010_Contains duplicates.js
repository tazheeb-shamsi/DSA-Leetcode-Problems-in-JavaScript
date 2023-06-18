//! Q217. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//! TOPICS ==> [Array, Hash Table, Sorting]

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containsDuplicate = (nums) => {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }

    set.add(nums[i]);
  }

  return false;
};

//! Let's test the function with the given examples:
let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums)); // Output: true

nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums)); // Output: false

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums)); // Output: true
