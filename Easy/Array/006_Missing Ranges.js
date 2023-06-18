//! Q163. find the missing ranges in a given sorted array of integers within a specified range. We need to return the missing ranges as a list of strings.
//! TOPIC ==> [Array]

const findMissingRanges = (nums, lower, upper) => {
  const result = [];

  // Helper function to add range to the result
  const addRange = (start, end) => {
    if (start === end) {
      result.push(`${start}`);
    } else {
      result.push(`${start}->${end}`);
    }
  };

  // Check for lower bound
  if (nums[0] > lower) {
    addRange(lower, nums[0] - 1);
  }

  // Check for intermediate ranges
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      addRange(nums[i - 1] + 1, nums[i] - 1);
    }
  }

  // Check for upper bound
  if (nums[nums.length - 1] < upper) {
    addRange(nums[nums.length - 1] + 1, upper);
  }

  return result;
};


// testing th function:
const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;

console.log(findMissingRanges(nums, lower, upper));
// Output: ["2", "4->49", "51->74", "76->99"]
