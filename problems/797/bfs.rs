use std::collections::VecDeque;

impl Solution {
    pub fn all_paths_source_target(graph: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let target = (graph.len()-1) as i32;
        //bfs
        let mut res = Vec::new();

        let mut queue = VecDeque::from([Vec::from([0])]);
        while let Some(path) = queue.pop_front() {
            for next in &graph[*path.last().unwrap() as usize] {
                let mut new_path = path.clone();
                new_path.push(*next);
                if (*next == target) {
                    res.push(new_path);
                } else {
                    queue.push_back(new_path);
                }
            }
        }

        return res;
    }
}