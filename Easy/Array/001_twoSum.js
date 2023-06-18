//! Q1: Given an array of integers nums and an integer target,
//! TOPIC ==> [Array,  Hash Table]

//! return indices of the two numbers such that they add up to target.

const nums = [2,7,11,15]
const twoSum = function (nums, target) {
  console.log(numMap);
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
};
