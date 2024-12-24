function eatenApples(apples: number[], days: number[]): number {
  type Item = {
    expire: number,
    num: number
  }

  const pq = new MinPriorityQueue<Item>({
    priority: (item) => item.expire
  })

  const n = apples.length
  // eat
  let eaten = 0;
  let i = 0
  for (; i < n; i++) {
    const apple = apples[i]
    const expire = i + days[i]

    pq.enqueue({
      num: apple,
      expire
    })
    // clear pq
    while (pq.size()) {
      const { element: item } = pq.front()
      if (item.num === 0 || i >= item.expire) {
        pq.dequeue();
      } else {
        break;
      }
    }

    if (pq.size()) {
      pq.front().element.num -= 1
      eaten += 1
    }
  }

  while (pq.size()) {
    const { element } = pq.dequeue()
    if (element.expire < i) {
      continue;
    }
    const canEat = Math.min(element.num, element.expire - i)
    eaten += canEat
    i += canEat
  }

  return eaten
};