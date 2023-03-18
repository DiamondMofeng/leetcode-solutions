package leetcode

func checkPalindromeFormation(a string, b string) bool {
	// 先找相同的前、后缀，再判断剩下的字符串是否为回文串
	return check(a, b) || check(b, a)
}

func check(a string, b string) bool {
	n := len(a)
	// 先找a前缀与b后缀可匹配的最大长度
	pa := 0
	pb := n - 1
	for a[pa] == b[pb] {
		if pa >= pb {
			return true
		}
		pa += 1
		pb -= 1
	}

	// 分别判断剩余字符串是否为回文串
	subA := a[pa : pb+1]
	subB := b[pa : pb+1]
	return isPalindrome(subA) || isPalindrome(subB)
}

func isPalindrome(s string) bool {
	// 中心扩展
	var left int
	var right int
	if len(s)%2 == 0 {
		left = len(s)/2 - 1
		right = len(s) / 2
	} else {
		left = len(s)/2 - 1
		right = len(s)/2 + 1
	}

	for left >= 0 && right < len(s) {
		if s[left] != s[right] {
			return false
		}
		left -= 1
		right += 1
	}

	return true
}
