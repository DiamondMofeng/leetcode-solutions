use std::collections::HashMap;

impl Solution {
    pub fn num_of_minutes(n: i32, head_id: i32, manager: Vec<i32>, inform_time: Vec<i32>) -> i32 {
        //建map
        let mut map: HashMap<usize, Vec<usize>> = HashMap::new();
        for (cur, upper) in manager.iter().enumerate() {
            map.entry(*upper as usize).or_insert(Vec::new()).push(cur);
        }
        //dfs
        fn dfs(
            map: &HashMap<usize, Vec<usize>>,
            inform_time: &Vec<i32>,
            employee: usize,
            mut time: i32,
            max_time: &mut i32,
        ) {
            match map.get(&employee) {
                None => {
                    *max_time = *max_time.max(&mut time);
                    return;
                }
                Some(next_employees) => {
                    for next in next_employees {
                        dfs(
                            map,
                            inform_time,
                            *next,
                            time + inform_time[employee],
                            max_time,
                        );
                    }
                }
            }
        }
        let mut max_time = 0;

        dfs(&map, &inform_time, head_id as usize, 0, &mut max_time);

        return max_time;
    }
}