package leetcode

import "sort"

func answerQueries(nums []int, queries []int) []int {
	// 前缀和+二分
	sort.Slice(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})

	// 前缀和
	prefixSum := make([]int, len(nums)+1)
	for i, num := range nums {
		prefixSum[i+1] = prefixSum[i] + num
	}

	// 二分找到前缀和数组中第一个*大于*target的位置
	search := func(target int) int {
		//[l, r)
		left := 0
		right := len(prefixSum)
		for left < right {
			mid := (left + right) / 2
			if prefixSum[mid] > target {
				right = mid
			} else {
				left = mid + 1
			}
		}

		return left - 1
	}

	res := make([]int, len(queries))
	for i, target := range queries {
		res[i] = search(target)
	}

	return res
}
