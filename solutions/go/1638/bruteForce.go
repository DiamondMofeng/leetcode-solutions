package leetcode

func countSubstrings(s string, t string) int {
	sLen, tLen := len(s), len(t)

	res := 0

	for ps := 0; ps < sLen; ps++ {
		for pt := 0; pt < tLen; pt++ {
			cnt := 0
			for i := 0; ps+i < sLen && pt+i < tLen; i++ {
				if s[ps+i] != t[pt+i] {
					cnt += 1
				}
				if cnt == 1 {
					res += 1
				}
				if cnt >= 2 {
					break
				}
			}
		}
	}

	return res
}
