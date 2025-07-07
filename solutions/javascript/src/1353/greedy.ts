function maxEvents(events: number[][]): number {
  const groupByStartTime = new Map<number, number[][]>()

  for (const e of events) {
    const startTime = e[0]
    if (!groupByStartTime.get(startTime)) {
      groupByStartTime.set(startTime, [e])
    } else {
      groupByStartTime.get(startTime)!.push(e)
    }
  }

  // 按开始时间排序
  const groupedEvents = [...groupByStartTime].sort(([s1], [s2]) => {
    return s1 - s2
  })

  const pq = new MinPriorityQueue((e: number[]) => e[1])

  for (const ev of groupedEvents[0][1]) {
    pq.push(ev)
  }

  let d = groupedEvents[0][0];

  let nextGroup = 1

  let res = 0;
  while (pq.size()) {

    // 消除无用event
    while (pq.size() && pq.front()[1] < d) {
      pq.pop()
    }

    // 使用event
    if (pq.size()) {
      // console.log(d)
      d = Math.max(d + 1, pq.front()[0] + 1)
      res += 1
      // console.log(pq.front())
      pq.pop()
    }

    // 添加新的events
    if (nextGroup < groupedEvents.length && (groupedEvents[nextGroup][0] <= d || pq.size() === 0)) {
      for (const ev of groupedEvents[nextGroup][1]) {
        pq.push(ev)
      }
      nextGroup += 1
    }
  }

  return res;
};