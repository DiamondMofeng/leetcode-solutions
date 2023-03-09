package leetcode

func minimumRecolors(blocks string, k int) int {
	//滑动窗口

	white := 0

	left := 0
	right := 0

	for right < k {
		if blocks[right] == 'W' {
			white += 1
		}
		right += 1
	}

	res := white

	for right < len(blocks) {
		if blocks[right] == 'W' {
			white += 1
		}

		if blocks[left] == 'W' {
			white -= 1
		}
		left += 1
		right += 1

		res = min(res, white)
	}

	return res
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
