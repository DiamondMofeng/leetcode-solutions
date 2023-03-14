package leetcode

func restoreMatrix(rowSum []int, colSum []int) [][]int {
	rowLen := len(rowSum)
	colLen := len(colSum)

	res := make([][]int, rowLen)
	for i := 0; i < rowLen; i++ {
		res[i] = make([]int, colLen)
	}

	for r := 0; r < rowLen; r++ {
		for c := 0; c < colLen; c++ {
			minVal := min(rowSum[r], colSum[c])
			res[r][c] += minVal
			rowSum[r] -= minVal
			colSum[c] -= minVal
		}
	}

	return res
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
