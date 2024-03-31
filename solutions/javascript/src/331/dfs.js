/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  preorder = preorder.split(',')
  const n = preorder.length

  function checkNode(i) {
      if (preorder[i] === '#' || i >= n) {
          return i
      }

      let next = checkNode(i + 1)
      let rNext = checkNode(next + 1)

      return rNext
  }

  return checkNode(0) === n - 1

};