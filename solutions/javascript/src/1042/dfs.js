const FLOWERS = [1, 2, 3, 4]

/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {

    let graph = Object.fromEntries(new Array(n).fill(0).map((_, i) => [i + 1, []]))

    paths.forEach(([e1, e2]) => {
        graph[e1].push(e2)
        graph[e2].push(e1)
    })

    let res = new Array(n)

    // 暴力乱涂
    function dfs(node) {
        // visited
        if (res[node]) {
            return
        }
        for (let f of FLOWERS) {
            if (graph[node]?.every((next) => {
                return res[next] !== f
            })) {
                res[node] = f
                break
            }
        }
        for (let next of graph[node]) {
            dfs(next)
        }
    }

    for (let i = 1; i <= n; i++) {
        dfs(i)
    }

    return res.slice(1)
};