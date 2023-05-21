/**
 * @param {number[]} bucket
 * @param {number[]} vat
 * @return {number}
 */
var storeWater = function (bucket, vat) {
  const n = bucket.length
  let res = Infinity

  let maxV = Math.max(...vat)
  if (maxV === 0) {
      return 0
  }

  for (let v = 1; v <= maxV; v++) {
      let cnt = 0;
      for (let i = 0; i < n; i++) {
          cnt += Math.max(
              0,
              Math.ceil(vat[i] / v) - bucket[i]
          )
      }
      res = Math.min(res, cnt + v)
  }

  return res;
};