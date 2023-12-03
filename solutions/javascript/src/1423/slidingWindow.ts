function maxScore(cardPoints: number[], k: number): number {
  // 找到长度为 n-k 的和最小的子数组
  const n = cardPoints.length
  const sum = cardPoints.reduce((a, b) => a + b)
  if (n <= k) {
    return sum
  }

  const dropK = n - k

  let cur = 0;
  for (let i = 0; i < dropK; i++) {
    cur += cardPoints[i]
  }
  let min = cur

  for (let i = dropK; i < n; i++) {
    cur = cur + cardPoints[i] - cardPoints[i - dropK]
    min = Math.min(cur, min)
  }

  return sum - min
};