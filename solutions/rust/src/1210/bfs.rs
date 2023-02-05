use std::collections::VecDeque;

impl Solution {
    pub fn minimum_moves(grid: Vec<Vec<i32>>) -> i32 {
        type Pos = (usize, usize, usize);
        let n = grid.len();

        const HORI: usize = 0;
        const VERT: usize = 1;

        // row,col,pos
        let mut visited = vec![vec![vec![false; 2]; n]; n];

        let mut queue = VecDeque::from([(0, 0, 0)]);

        let mut steps = -1;
        while queue.len() > 0 {
            let mut new_queue = VecDeque::new();
            steps += 1;

            for (r, c, pose) in queue {
                //visited
                if visited[r][c][pose] {
                    continue;
                }
                visited[r][c][pose] = true;

                //终点
                if r == n - 1 && c == n - 2 && pose == HORI {
                    return steps;
                }

                //向右走
                if pose == HORI {
                    if c + 2 < n && grid[r][c + 2] == 0 {
                        new_queue.push_back((r, c + 1, HORI));
                    }
                } else {
                    if c + 1 < n && r + 1 < n && grid[r][c + 1] == 0 && grid[r + 1][c + 1] == 0 {
                        new_queue.push_back((r, c + 1, VERT));
                    }
                }
                //向下走
                if pose == HORI {
                    if r + 1 < n && c + 1 < n && grid[r + 1][c] + grid[r + 1][c + 1] == 0 {
                        new_queue.push_back((r + 1, c, HORI));
                    }
                } else {
                    if r + 2 < n && grid[r + 2][c] == 0 {
                        new_queue.push_back((r + 1, c, VERT));
                    }
                }
                //顺时针旋转
                if pose == HORI && r + 1 < n && grid[r + 1][c] + grid[r + 1][c + 1] == 0 {
                    new_queue.push_back((r, c, VERT));
                }
                //逆时针旋转
                if pose == VERT && c + 1 < n && grid[r][c + 1] + grid[r + 1][c + 1] == 0 {
                    new_queue.push_back((r, c, HORI));
                }
            }

            queue = new_queue;
        }

        return -1;
    }
}