package leetcode

func maximalNetworkRank(n int, roads [][]int) int {
	//可优化为set
	connected := make([][]bool, n)
	for i := range connected {
		connected[i] = make([]bool, n)
	}

	ranks := make([]int, n)
	for _, road := range roads {
		ranks[road[0]] += 1
		ranks[road[1]] += 1
		connected[road[0]][road[1]] = true
		connected[road[1]][road[0]] = true
	}

	res := 0
	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			cur := ranks[i] + ranks[j]
			if connected[i][j] {
				cur -= 1
			}
			if cur > res {
				res = cur
			}
		}
	}

	return res
}
