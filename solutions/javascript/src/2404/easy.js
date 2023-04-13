/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  return nums.reduce(
    (record, val) => {
      const [map, resVal] = record;
      if (val % 2 === 0) {
        map[val] ??= 0;
        map[val] += 1;
        if (
          map[val] > (map[resVal] ?? 0) ||
          (map[val] === map[resVal] && val < resVal)
        ) {
          return [map, val];
        }
      }
      return record;
    },
    [{}, -1]
  )[1];
};
