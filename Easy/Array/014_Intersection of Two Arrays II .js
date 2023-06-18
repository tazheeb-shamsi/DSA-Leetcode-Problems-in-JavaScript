//! Q350. Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
//! TOPICS ==> [Array, Hash Table , Two Pointers]

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const intersect = (nums1, nums2) => {
  const freqMap = new Map();
  const result = [];

  // Populate frequency map for nums1
  for (const num of nums1) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Find intersection while preserving frequency
  for (const num of nums2) {
    if (freqMap.has(num) && freqMap.get(num) > 0) {
      result.push(num);
      freqMap.set(num, freqMap.get(num) - 1);
    }
  }

  return result;
};

//!  Let's test the function with the given examples:

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
console.log(intersect(nums1, nums2));
// Output: [2, 2]

nums1 = [4, 9, 5];
nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));
// Output: [4, 9]
