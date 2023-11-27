function sumSubarrayMins(arr: number[]): number {
  // 对于每个元素，找到左右两边第一个小于自己的元素
  const n = arr.length
  const leftMinDistance: number[] = []

  {
    const stack = [[-1, -1]]

    for (let i = 0; i < n; i++) {
      const x = arr[i]
      while (stack[stack.length - 1][0] > x) {
        stack.pop()
      }
      leftMinDistance.push(i - stack[stack.length - 1][1])
      stack.push([x, i])
    }
  }


  let res = 0
  {
    const stack = [[-1, n]]
    for (let i = n - 1; i >= 0; i--) {
      const x = arr[i]
      while (stack[stack.length - 1][0] >= x) {
        stack.pop()
      }

      const rightDistance = stack[stack.length - 1][1] - i
      res = (res + x * (leftMinDistance[i] * rightDistance)) % (1e9 + 7)
      stack.push([x, i])
    }
  }
  return res
};