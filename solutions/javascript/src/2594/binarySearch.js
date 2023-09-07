/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {

  function check(time) {
      let sum = 0;
      for (const r of ranks) {
          sum += Math.floor(Math.sqrt(time / r))
      }
      return sum >= cars
  }

  let left = 1;
  let right = ranks[0] * cars * cars

  while (left < right) {
      const mid = Math.floor((left + right)/2)
      // console.log(left,mid,right)
      if (check(mid)) {
          right = mid
      } else {
          left = mid + 1
      }
  }

  return left

};