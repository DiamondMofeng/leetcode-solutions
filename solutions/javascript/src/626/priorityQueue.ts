interface E {
  v: number,
  vi: number,
  arrI: number,
}

//! You need to delete the `<E>` on the constructor before submitting as the leetcode type declaration is wrong.

/**
 * @param {number[][]} nums
 * @return {number[]}
*/
var smallestRange = function (nums: number[][]): number[] {
  const pq = new MinPriorityQueue<E>({
    compare(a, b) {
      return a.v - b.v
    }
  })

  const res = [Infinity, -Infinity]
  // init 
  nums.forEach((vals, arrI) => {
    const v = vals[0]

    res[0] = Math.min(res[0], v)
    res[1] = Math.max(res[1], v)

    pq.enqueue({
      v,
      vi: 0,
      arrI
    })

  })

  while (true) {
    const { vi, arrI } = pq.dequeue()
    const vals = nums[arrI]
    if (vi === vals.length - 1) {
      // return 
      break;
    }

    // try update res
    // get new val from arrI
    const newVal = vals[vi + 1]
    pq.enqueue({
      v: newVal,
      vi: vi + 1,
      arrI,
    })

    const newLeft = pq.back().v
    const newRight = pq.front().v;
    if (newRight - newLeft < res[1] - res[0]) {
      res[0] = newLeft
      res[1] = newRight
    }


  }

  return res;

};