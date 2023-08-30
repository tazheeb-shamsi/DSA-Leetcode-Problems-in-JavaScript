//! Q1: Given an array of integers nums and an integer target,
//! TOPIC ==> [Array,  Hash Table]

//! return indices of the two numbers such that they add up to target.

const nums = [2, 7, 11, 15];

const twoSum = function (nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
};
console.log(twoSum(nums, 9));

// if You wish to return pair of numbers eg. [2,7], instead of index of numbers in array

const numbers = [2, 7, 11, 15];

const TwoSum =  (numbers, target) =>{
  const numMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (numMap.has(complement)) {
      return [complement, numbers[i]];
    }
    numMap.set(numbers[i], i);
  }
  return [];
};
console.log(TwoSum(numbers, 9));
