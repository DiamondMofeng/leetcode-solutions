/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const n = s.length
  for (let i = 0; i < n / 2; i++) {
    if (s[i] !== s[n - 1 - i]) {
      return check(s.slice(i + 1, n - 1 - i + 1)) || check(s.slice(i, n - 1 - i))
    }
  }
  return true
};

function check(s) {
  const n = s.length
  for (let i = 0; i < n / 2; i++) {
    if (s[i] !== s[n - 1 - i]) {
      return false
    }
  }
  return true
}
