use std::collections::{HashSet, VecDeque};
use std::iter::FromIterator;

fn get_diffs(num: &mut String) -> Vec<String> {
    let mut res = Vec::with_capacity(8);
    unsafe {
        let u8s = num.as_bytes_mut();
        for i in 0..4 {
            u8s[i] += 1;
            if (u8s[i] > '9' as u8) {
                u8s[i] = '0' as u8;
            }
            res.push(std::str::from_utf8(u8s).unwrap().to_string());
            u8s[i] -= 1;
            if (u8s[i] < '0' as u8) {
                u8s[i] = '9' as u8;
            }
            u8s[i] -= 1;
            if (u8s[i] < '0' as u8) {
                u8s[i] = '9' as u8;
            }
            res.push(std::str::from_utf8(u8s).unwrap().to_string());
            u8s[i] += 1;
            if (u8s[i] > '9' as u8) {
                u8s[i] = '0' as u8;
            }
        }
    }
    
    return res;
}
impl Solution {

    pub fn open_lock(deadends: Vec<String>, target: String) -> i32 {
        let mut visited: HashSet<String> = HashSet::from_iter(deadends.into_iter());

        let mut queue: VecDeque<String> = VecDeque::from(["0000".to_string()]);

        let mut steps = -1;
        while (queue.len() > 0) {
            steps += 1;
            let cur_len = queue.len();
            for _ in 0..cur_len {
                let mut cur = queue.pop_front().unwrap();
                if (visited.contains(&cur)) {
                    continue;
                }
                if (cur == target) {
                    return steps;
                }
                for next in get_diffs(&mut cur) {
                    if (!visited.contains(&cur)) {
                        queue.push_back(next);
                    }
                }
                visited.insert(cur);
            }
        }

        return -1;
    }
}