function carPooling(trips: number[][], capacity: number): boolean {

  let maxDist = 0;
  for (const t of trips) {
    maxDist = Math.max(maxDist, t[2])
  }

  const diffArr = new Int32Array(maxDist)
  for (const t of trips) {
    diffArr[t[1]] += t[0]
    diffArr[t[2]] -= t[0]
  }

  let cur = 0
  for (const x of diffArr) {
    cur += x
    if (cur > capacity) {
      return false
    }
  }

  return true

};