/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * HashMap (One Pass)
 * Time complexity:- O(n)
 * Space complexity:- O(n)
 */
function twoSum(nums, target) {
  const prevMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (prevMap.has(diff)) {
      return [prevMap.get(diff), i];
    }

    prevMap.set(nums[i], i);
  }

  return [];
}

/**
 * HashMap (Two Pass)
 * Time complexity:- O(n)
 * Space complexity:- O(n)
 */
function twoSum(nums, target) {
  const indices = {};
  for (let i = 0; i < nums.length; i++) {
    indices[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (indices[diff] !== undefined && indices[diff] !== i) {
      return [i, indices[diff]];
    }
  }

  return [];
}

/**
 * Sorting
 * Time complexity:- O(nlogn)
 * Space complexity:- O(n)
 */
function twoSum(nums, target) {
  let numsArr = [];
  for (let i = 0; i < nums.length; i++) {
    numsArr.push([nums[i], i]);
  }

  numsArr.sort((a, b) => a[0] - b[0]);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let curr = numsArr[left][0] + numsArr[right][0];
    if (curr === target) {
      return [
        Math.min(numsArr[left][1], numsArr[right][1]),
        Math.max(numsArr[left][1], numsArr[right][1]),
      ];
    } else if (curr < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

/**
 * Brute force
 * Time complexity:- O(n2)
 * Space complexity:- O(1)
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
