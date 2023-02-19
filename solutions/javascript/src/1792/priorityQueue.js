/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {
  // 手机上写的，很烂
  let pq = new MaxPriorityQueue({
      priority: ([p1, t1]) => {
          return ((p1 + 1) / (t1 + 1) - (p1 / t1))
      }
  })
  classes.forEach(c => pq.enqueue(c))
  while (extraStudents--) {
      let first = pq.dequeue().element;
      //console.log(first)
      first[0] += 1
      first[1] += 1

      pq.enqueue(first)
  }

  let arr = pq.toArray().map(a => a.element)
  //console.log(arr)
  return _.sum(arr.map((a) => a[0] / a[1])) / arr.length
};
