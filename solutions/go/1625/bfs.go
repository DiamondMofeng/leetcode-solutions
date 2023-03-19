package leetcode

func findLexSmallestString(s string, inc int, rotate int) string {
	n := len(s)
	res := s

	applyInc := func(str string) string {

		chars := []byte(str)
		for i := 1; i < len(chars); i += 2 {
			chars[i] += byte(inc)
			if chars[i] > '9' {
				chars[i] -= 10
			}
		}

		return string(chars)
	}

	applyRotate := func(str string) string {
		return str[rotate:n] + str[0:rotate]
	}

	queue := []string{s}
	visited := map[string]bool{}

	for len(queue) > 0 {
		cur := queue[0]
		queue = queue[1:]

		if visited[cur] {
			continue
		}
		visited[cur] = true

		if cur < res {
			res = cur
		}

		// increase
		queue = append(queue, applyInc(cur))

		// rotate
		queue = append(queue, applyRotate(cur))
	}

	return res
}
