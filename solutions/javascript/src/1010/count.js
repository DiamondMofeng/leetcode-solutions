/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  let map = {};
  let res = 0;

  time.forEach((t) => {
    t = t % 60;

    map[(60 - t) % 60] ??= 0;
    map[t] ??= 0;
    res += map[(60 - t) % 60];
    map[t] += 1;
  });

  return res;
};
