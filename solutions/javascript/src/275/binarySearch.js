/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const n = citations.length

  // [l, r]
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const mid = (left + right) >> 1

    const ok = (n - mid) <= citations[mid]
    if (ok) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return n - left
};