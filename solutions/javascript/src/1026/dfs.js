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
var maxAncestorDiff = function (root) {
  let res = 0;
  function dfs(node, min, max) {
    if (!node) {
      return;
    }
    res = Math.max(res, Math.abs(node.val - min), Math.abs(node.val - max));
    min = Math.min(node.val, min);
    max = Math.max(node.val, max);

    dfs(node.left, min, max);
    dfs(node.right, min, max);
  }
  dfs(root, root.val, root.val);

  return res;
};
