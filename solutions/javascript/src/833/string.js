/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
  const n = indices.length
  const replaceIndices = new Array(n)
      .fill().map((_, i) => i)
      .sort((a, b) => indices[a] - indices[b])
      .filter((i) => s.indexOf(sources[i], indices[i]) === indices[i])

  let p = 0;
  let res = ''
  for (let i of replaceIndices) {
      // 把前面的都补上
      res += s.slice(p, indices[i])
      p = indices[i] + sources[i].length
      // 加上replace后的字符串
      res += targets[i]
  }

  res += s.slice(p)
  return res
};