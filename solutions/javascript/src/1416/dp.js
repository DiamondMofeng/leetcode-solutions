const MOD = 1e9 + 7;

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function (s, k) {
  let res = 0;
  let kStr = k.toString();
  let kLen = kStr.length;

  // dp[i]代表以i为结尾的最多结果
  let dp = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    // 看之前的
    for (let prev = i - kLen; prev < i; prev++) {
      if (prev < -1) {
        continue;
      }
      // 字符串为s[prev+1:i+1] //包括i
      if (s[prev + 1] === "0") {
        continue;
      }
      let curStr = s.slice(prev + 1, i + 1);
      // 满足条件
      if (parseInt(curStr) <= k) {
        dp[i] += dp[prev] ?? 1;
        dp[i] %= MOD;
      }
    }
  }

  return dp[dp.length - 1];
};
