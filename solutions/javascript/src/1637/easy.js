/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  points.sort(([x1, y1], [x2, y2]) => {
    return x1 - x2
  })
  let res = 0;
  for (let i = 1; i < points.length; i++) {
    res = Math.max(res, points[i][0] - points[i - 1][0])
  }
  return res
};