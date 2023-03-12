package leetcode

import "sort"

func treeDiameter(edges [][]int) int {
	visited := make([]bool, len(edges)+1)
	tree := map[int][]int{}

	// 初始化tree
	for _, edge := range edges {
		from, to := edge[0], edge[1]
		if nexts, ok := tree[from]; ok {
			tree[from] = append(nexts, to)
		} else {
			tree[from] = []int{to}
		}
		if nexts, ok := tree[to]; ok {
			tree[to] = append(nexts, from)
		} else {
			tree[to] = []int{from}
		}
	}

	maxRes := 0
	dfs(tree, visited, 0, &maxRes)
	return maxRes
}

func dfs(tree map[int][]int, visited []bool, cur int, maxRes *int) int {
	visited[cur] = true

	nexts := []int{}

	for _, id := range tree[cur] {
		if visited[id] {
			continue
		}
		nexts = append(nexts, dfs(tree, visited, id, maxRes))
	}

	if len(nexts) == 0 {
		return 1
	}

	// 排序
	sort.Slice(nexts, func(i, j int) bool {
		return nexts[i] > nexts[j]
	})
	// 尝试更新res
	if len(nexts) >= 2 {
		*maxRes = max(*maxRes, nexts[0]+nexts[1])
	} else if len(nexts) >= 1 {
		*maxRes = max(*maxRes, nexts[0])
	}

	return 1 + nexts[0]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
