package leetcode

import (
	"sort"
)

func checkArithmeticSubarrays(nums []int, lefts []int, rights []int) []bool {

	// n := len(nums)
	m := len(lefts)

	res := make([]bool, m)

	// 暴力
	for i := 0; i < m; i++ {
		l, r := lefts[i], rights[i]
		subArr := make([]int, r+1-l)
		copy(subArr, nums[l:r+1])

		res[i] = check(subArr)
	}

	return res
}

func check(arr []int) bool {
	if len(arr) == 1 {
		return true
	}

	sort.Slice(arr, func(i, j int) bool {
		return arr[i] < arr[j]
	})

	diff := arr[1] - arr[0]
	for i := 1; i < len(arr); i++ {
		if arr[i]-arr[i-1] != diff {
			return false
		}
	}

	return true
}
