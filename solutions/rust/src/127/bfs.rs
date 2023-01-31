use std::collections::{HashSet, VecDeque};

fn str_diff(from: &String, to: &String) -> usize {
    return from
        .as_bytes()
        .iter()
        .zip(to.as_bytes().iter())
        .filter(|(f, t)| f != t)
        .count();
}

impl Solution {
    pub fn ladder_length(begin_word: String, end_word: String, mut word_list: Vec<String>) -> i32 {
        //bfs
        let mut visited = vec![false; word_list.len()];
        let mut queue = VecDeque::from([begin_word]);

        let mut steps = 0;

        while (queue.len() > 0) {
            steps += 1;
            let curLen = queue.len();
            for _ in 0..curLen {
                let cur = queue.pop_front().unwrap();
                if (cur == end_word) {
                    return steps;
                }
                for (i, word) in word_list.iter_mut().enumerate() {
                    if (visited[i]) {
                        continue;
                    }
                    if (str_diff(word, &cur) == 1) {
                        queue.push_back(std::mem::take(word));
                        visited[i] = true;
                    }
                }
            }
        }

        return 0;
    }
}