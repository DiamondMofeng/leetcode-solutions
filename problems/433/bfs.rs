use std::collections::VecDeque;

fn str_diff(from: &String, to: &String) -> i32 {
    return from
        .as_bytes()
        .iter()
        .zip(to.as_bytes().iter())
        .filter(|(f, t)| f != t)
        .count() as i32;
}

impl Solution {

    pub fn min_mutation(start_gene: String, end_gene: String, bank: Vec<String>) -> i32 {
        let mut visited = vec![false; bank.len()];
        let mut queue = VecDeque::from([start_gene]);
        let mut steps = -1;
        while (queue.len() > 0) {
            steps += 1;
            for _ in 0..queue.len() {
                let cur = queue.pop_front().unwrap();
                if (cur == end_gene) {
                    return steps;
                }
                for (idx, g) in bank.iter().enumerate() {
                    if (visited[idx]) {
                        continue;
                    }
                    if (str_diff(g, &cur) == 1) {
                        queue.push_back(g.clone());
                        visited[idx] = true;
                    }
                }
            }
        }

        return -1;
    }
}