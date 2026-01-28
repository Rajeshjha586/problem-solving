/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 *
 * Hash Set
 * Time Complexity:- O(n)
 * Space Complexity:- O(n)
 */
function hasDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

/**
 * Sorting
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1) and O(n) depending on the sorting algorithm
 */

function hasDuplicate(nums) {
  //Sort a copy if original order matters
  let sorted_nums = nums.sort((a, b) => a - b);

  for (let i = 1; i < sorted_nums.length; i++) {
    if (sorted_nums[i] === sorted_nums[i - 1]) {
      return true;
    }
  }

  return false;
}

/**
 * Brute force
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function hasDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
}
