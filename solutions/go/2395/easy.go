package leetcode

func findSubarrays(nums []int) bool {
	visited := map[int]bool{}
	for i := 1; i < len(nums); i++ {
		sum := nums[i-1] + nums[i]
		if visited[sum] {
			return true
		}
		visited[sum] = true
	}
	return false
}
