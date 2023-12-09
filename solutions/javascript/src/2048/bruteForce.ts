function isBalance(num: number) {
  return _.every(
    _.countBy(String(num)),
    (v, k) => +k === v
  )
}

const UPPER = 1224444

const list = _.range(UPPER + 1).filter(isBalance)

function upperBound(arr: number[], target: number) {
  let l = 0;
  let r = arr.length - 1

  while (l <= r) {
    const mid = (l + r) >> 1
    if (arr[mid] <= target) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return l;
}

function nextBeautifulNumber(n: number): number {
  return list[upperBound(list, n)]
};