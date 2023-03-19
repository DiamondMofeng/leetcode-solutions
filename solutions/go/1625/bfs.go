package leetcode

import (
	"github.com/emirpasic/gods/lists/singlylinkedlist"
	"github.com/emirpasic/gods/sets/hashset"
)

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

	queue := singlylinkedlist.New(s)
	set := hashset.New()

	for queue.Size() > 0 {
		_cur, _ := queue.Get(0)
		cur := _cur.(string)
		queue.Remove(0)

		if set.Contains(cur) {
			continue
		}
		set.Add(cur)

		if cur < res {
			res = cur
		}

		// increase
		queue.Add(applyInc(cur))

		// rotate
		queue.Add(applyRotate(cur))
	}

	return res
}
