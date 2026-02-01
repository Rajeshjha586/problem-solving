/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/***
 * Bucket Sort
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Where n is the length of the array.
 */
function topKFrequent(nums, k) {
  const count = {};
  const freq = Array.from({ length: nums.length + 1 }, () => []);

  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const num in count) {
    freq[count[num]].push(parseInt(num));
  }

  const res = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (const num of freq[i]) {
      res.push(num);
      if (res.length === k) {
        return res;
      }
    }
  }
}

/***
 * Sorting
 * Time Complexity: O(nlogn)
 * Space Complexity: O(n)
 */
function topKFrequent(nums, k) {
  const count = {};
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  const arr = Object.entries(count).map(([num, freq]) => [freq, parseInt(num)]);

  arr.sort((a, b) => b[0] - a[0]);

  return arr.slice(0, k).map((pair) => pair[1]);
}
