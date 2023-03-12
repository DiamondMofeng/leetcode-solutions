package leetcode

/**
 * Definition for a binary tree node.
 *
 */
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func diameterOfBinaryTree(root *TreeNode) int {

	if root == nil {
		return 0
	}

	maxRes := 0
	dfs(root, &maxRes)

	return maxRes - 1
}

func dfs(node *TreeNode, maxRes *int) int {
	if node == nil {
		return 0
	}

	leftLen := dfs(node.Left, maxRes)
	rightLen := dfs(node.Right, maxRes)

	*maxRes = max(*maxRes, leftLen+1+rightLen)

	return 1 + max(leftLen, rightLen)
}

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}
