/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let map = {};
  let inDegrees = new Array(numCourses).fill(0)
  // let outDegrees = new Array(numCourses).fill(0)
  prerequisites.forEach(([upper, base]) => {
    // outDegrees[begin] += 1;
    inDegrees[upper] += 1;
    (map[base] ??= []).push(upper);
  })

  let res = [];
  let queue = [];
  //找到起点
  inDegrees.forEach((deg, id) => {
    if (deg === 0) {
      queue.push(id);
      res.push(id);
    }
  })
  while (queue.length) {
    let newQueue = [];
    queue.forEach((beginId) => {
      (map[beginId] ??= []).forEach((nextId) => {
        inDegrees[nextId] -= 1;
        if (inDegrees[nextId] === 0) {
          newQueue.push(nextId);
          res.push(nextId);
        }
      })
    })

    queue = newQueue;
  }
  // console.log(inDegrees,map)
  if (res.length !== numCourses) {
    return [];
  }
  return res;

};