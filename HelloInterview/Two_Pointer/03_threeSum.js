/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/***
 * Two pointer
 * Time Complexity: O(n2)
 * Space Complexity: O(n2)
 */
function threeSum(nums) {
  // Sort array to enable two-pointer technique and handle duplicates
  nums.sort((a, b) => a - b);
  const result = [];

  // Fix the first element and use two pointers for the remaining two
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for the first element to avoid duplicate triplets
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Initialize two pointers for the remaining subarray
    let left = i + 1;
    let right = nums.length - 1;

    // Use two-pointer technique to find pairs that sum to nums[i]
    while (left < right) {
      const total = nums[i] + nums[left] + nums[right];

      if (total < 0) {
        // Sum too small, move left pointer right to increase sum
        left++;
      } else if (total > 0) {
        // Sum too large, move right pointer left to decrease sum
        right--;
      } else {
        // Found a valid triplet
        result.push([nums[i], nums[left], nums[right]]);

        // Skip all duplicates values to avoid duplicate triplets
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        // Move both pointers to continue searching
        left++;
        right--;
      }
    }
  }
  return result;
}

/***
 * Brute force
 * Time Complexity: O(n3)
 * Space Complexity: O(m) -> m is n. of triplets
 */
function threeSum(nums) {
  const res = new Set();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          res.add(JSON.stringify([nums[i], nums[j], nums[k]]));
        }
      }
    }
  }

  return Array.from(res).map((item) => JSON.parse(item));
}
