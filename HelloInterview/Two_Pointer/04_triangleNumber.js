/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * Brute Force
 * Time Complexity: O(n3)
 * Space Complexity: O(1)
 */
function triangleNumber(nums) {
  nums.sort((a, b) => a - b);

  let count = 0;
  for (let i = nums.length - 1; i >= 2; i--) {
    let left = 0;
    let right = i - 1;

    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        count += right - left;
        right--;
      } else {
        left++;
      }
    }
  }
  return count;
}

/**
 * Brute Force
 * Time Complexity: O(n3)
 * Space Complexity: O(1)
 */
function triangleNumber(nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          nums[i] + nums[j] > nums[k] &&
          nums[i] + nums[k] > nums[j] &&
          nums[j] + nums[k] > nums[i]
        ) {
          count++;
        }
      }
    }
  }
  return count;
}

console.log(triangleNumber([11, 4, 9, 6, 15, 18]));
