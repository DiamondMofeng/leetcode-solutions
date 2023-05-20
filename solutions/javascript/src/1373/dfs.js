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
var maxSumBST = function (root) {
  let res = 0;

  function dfs(node) {
    if (!node) {
      return {
        max: -Infinity,
        min: Infinity,
        sum: 0,
        ok: true,
      };
    }

    let leftInfo = dfs(node.left);
    let rightInfo = dfs(node.right);

    let sum = leftInfo.sum + rightInfo.sum + node.val;
    let max = Math.max(node.val, leftInfo.max, rightInfo.max);
    let min = Math.min(node.val, leftInfo.min, rightInfo.min);
    let ok =
      leftInfo.ok &&
      rightInfo.ok &&
      node.val > leftInfo.max &&
      node.val < rightInfo.min;

    if (ok) {
      res = Math.max(res, sum);
    }

    return {
      sum,
      max,
      min,
      ok,
    };
  }

  dfs(root);

  return res;
};
