function cachedFn(fn) {
  const cache = new Map()

  return function (node) {
    if (!cache.has(node)) {
      cache.set(node, fn(node))
    }
    return cache.get(node)
  }
}

const maxEarnIfSteal = cachedFn((node) => {
  if (!node) {
    return 0
  }

  return node.val +
    maxEarnIfNotSteal(node.left) +
    maxEarnIfNotSteal(node.right)

})

const maxEarnIfNotSteal = cachedFn((node) => {
  if (!node) {
    return 0;
  }

  return 0 +
    Math.max(maxEarnIfSteal(node.left), maxEarnIfNotSteal(node.left)) +
    Math.max(maxEarnIfSteal(node.right), maxEarnIfNotSteal(node.right))
})

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  return Math.max(
    maxEarnIfSteal(root),
    maxEarnIfNotSteal(root),
  )
};