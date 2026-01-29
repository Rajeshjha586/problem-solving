/**
 * @param {number[]} heights
 * @return {number}
 */
/***
 * Two Pointer
 * Time Complexity :- O(n)
 * Space Complexity :- O(1)
 */
function maxArea(heights) {
  let left = 0;
  let right = heights.length - 1;
  let currentMax = 0;

  while (left < right) {
    let width = right - left;
    let height = Math.min(heights[left], heights[right]);
    let currentArea = width * height;

    currentMax = Math.max(currentMax, currentArea);

    if (heights[left] <= heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return currentMax;
}

/***
 * Brute Force
 * Time Complexity :- O(n2)
 * Space Complexity :- O(1)
 */
function maxArea(heights) {
  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      res = Math.max(res, Math.min(heights[i], heights[j]) * (j - i));
    }
  }
  return res;
}

/**
 * Problem:- You are given an integer array heights where heights[i] represents the height of the ith bar.
 * You may choose any two bars to form a container. Return the maximum amount of water a container can store.
 *
 * Input: height = [1,7,2,5,4,7,3,6]
 * Output: 36
 *
 * Input: height = [2,2,2]
 * Output: 4
 */
