/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function (s) {
  const n = s.length;

  // 双指针
  let res = 0; // res的起点坐标
  let can = 1; // candidate的起点坐标
  let i = 0; // 字符串下标偏移量

  while (can + i < n) {
    if (s[can + i] === s[res + i]) {
      i += 1;
    } else if (s[can + i] > s[res + i]) {
      res = res + i + 1;
      i = 0;
      if (res >= can) {
        can = res + 1;
      }
    } else if (s[can + i] < s[res + i]) {
      can = can + i + 1;
      i = 0;
    }
  }

  return s.slice(res);
};
