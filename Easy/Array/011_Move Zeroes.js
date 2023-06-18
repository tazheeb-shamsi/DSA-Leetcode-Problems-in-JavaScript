//! Q283. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//! TOPICS ==> [Array, Two Pointers]

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

const moveZeroes = (nums) => {
  let nextNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap the non-zero element with the nextNonZero position
      [nums[i], nums[nextNonZero]] = [nums[nextNonZero], nums[i]];
      nextNonZero++;
    }
  }
};

//! Let's test the function with the given examples:
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]

nums = [0];
moveZeroes(nums);
console.log(nums); // Output: [0]