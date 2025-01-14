/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums: number[], k: number): number {

  const pq = new MinPriorityQueue({
    compare: (a: number, b: number) => a - b
  });

  for (const x of nums) {
    pq.enqueue(x);
  }

  let cnt = 0;
  while (true) {
    let x = pq.dequeue();
    let y = pq.dequeue();
    if (x >= k) {
      return cnt;
    }
    cnt += 1
    pq.enqueue(Math.min(x, y) * 2 + Math.max(x, y));
  }

  return -1;
};