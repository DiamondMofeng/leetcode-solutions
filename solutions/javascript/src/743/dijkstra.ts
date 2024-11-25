function networkDelayTime(times: number[][], n: number, k: number): number {

  const pq = new MinPriorityQueue<[id: number, cost: number]>({
    priority: ([, cost]) => cost
  })

  const g: number[][][] = new Array(n + 1).fill(null).map(() => []);

  for (const [u, v, w] of times) {
    g[u].push([v, w])
  }

  const costs = new Array(n + 1).fill(Infinity)

  costs[0] = 0;

  pq.enqueue([k, 0]);
  while (pq.size()) {
    const { element: [i, v] } = pq.dequeue()
    if (v >= costs[i]) {
      continue;
    }
    costs[i] = v;

    for (const [next, c] of g[i]) {
      pq.enqueue([next, v + c])
    }
  }

  // has unvisited
  if (costs.some(c => c === Infinity)) {
    return -1
  }

  return Math.max(...costs)
};