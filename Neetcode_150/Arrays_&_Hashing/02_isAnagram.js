/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/**
 * Hash Table (Using Array)
 * Time complexity :- O(n + m)
 * Space complexity :- O(1)
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  return count.every((val) => val === 0);
}

/**
 * Hash Map
 * Time complexity :- O(n + m)
 * Space complexity :- O(1)
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const countS = {};
  const countT = {};

  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1;
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }

  for (const key in countS) {
    if (countS[key] !== countT[key]) {
      return false;
    }
  }

  return true;
}

/**
 * Sorting
 * Time complexity :- O(nlogn + mlogm)
 * Space complexity :- O(1) or O(n + m) depending on the sorting algorithm
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let sSort = s.split("").sort().join();
  let tSort = t.split("").sort().join();

  return sSort == tSort;
}

/****
 * Problem:- Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
 * An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 *
 * Input: s = "racecar", t = "carrace"
 * Output: true
 *
 * Input: s = "jar", t = "jam"
 * Output: false
 */
