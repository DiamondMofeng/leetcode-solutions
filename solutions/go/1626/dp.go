package leetcode

import "sort"

func bestTeamScore(scores []int, ages []int) int {
	n := len(scores)

	idxes := make([]int, n)
	for i := 0; i < n; i++ {
		idxes[i] = i
	}

	sort.Slice(idxes, func(ii, jj int) bool {
		i, j := idxes[ii], idxes[jj]
		return (scores[i] < scores[j]) || (scores[i] == scores[j] && ages[i] < ages[j])
	})

	res := 0

	// dp[i]意为从i开始可以得到的最大队伍分数
	dp := make([]int, n)

	for i, curIdx := range idxes {
		dp[i] = scores[curIdx]

		for j := 0; j < i; j++ {
			lastIdx := idxes[j]

			if ages[curIdx] >= ages[lastIdx] {
				dp[i] = max(dp[i], dp[j]+scores[curIdx])
			}

		}
		// 更新res
		res = max(res, dp[i])
	}

	return res
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
