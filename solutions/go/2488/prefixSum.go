package leetcode

func countSubarrays(nums []int, k int) int {
	// 前缀和

	targetPos := -1
	// 顺便记录目标位置
	for idx, num := range nums {
		if num == k {
			targetPos = idx
		}
	}

	leftMap := map[int]int{}
	prefixSum := make([]int, len(nums))

	// 从左往右扫至targetPos，记录前缀和对应值出现次数
	leftDiff := 0
	for i := targetPos; i >= 0; i-- {
		if nums[i] > k {
			leftDiff += 1
		} else if nums[i] < k {
			leftDiff -= 1
		}
		prefixSum[i] = leftDiff

		if _, ok := leftMap[prefixSum[i]]; !ok {
			leftMap[prefixSum[i]] = 0
		}
		leftMap[prefixSum[i]] += 1

	}

	res := 0
	// 从targetPos开始向右扫，记录结果
	diff := 0
	for i := targetPos; i < len(nums); i++ {
		if nums[i] > k {
			diff += 1
		} else if nums[i] < k {
			diff -= 1
		}

		// 统计差为1/0的情况
		if v, ok := leftMap[-diff]; ok {
			res += v
		}

		if v, ok := leftMap[-diff+1]; ok {
			res += v
		}
	}

	return res
}
