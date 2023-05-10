/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
  if (k % 2 === 0 || k % 5 === 0) {
      return -1;
  }
  let set = new Set();
  let i = 1;
  let len = 1;
  while (i % k !== 0 && !set.has(i)) {
      set.add(i)
      i = (i * 10 + 1) % k
      len += 1;
  }
  return len
};