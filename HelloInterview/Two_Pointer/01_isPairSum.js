/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

/**
 * Two Pointer
 * Time Complexity:- O(n)
 * Space Complexity: O(1)
 */
function isPairSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const currentSum = nums[left] + nums[right];

    if (currentSum === target) {
      return true;
    }

    if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

/**
 *
 * Brute Force
 * Time Complexity:- O(n^2)
 * Space Complexity:- O(1)
 */
function isPairSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return true;
      }
    }
  }

  return false;
}
