use std::collections::{HashMap, VecDeque};

impl Solution {
   pub fn shortest_alternating_paths(
        n: i32,
        red_edges: Vec<Vec<i32>>,
        blue_edges: Vec<Vec<i32>>,
    ) -> Vec<i32> {
        //初始化两个map
        let mut red_map: HashMap<i32, Vec<i32>> = HashMap::new();
        let mut blue_map: HashMap<i32, Vec<i32>> = HashMap::new();

        for edge in red_edges {
            let from = edge[0];
            let to = edge[1];
            red_map.entry(from).or_default().push(to);
        }

        for edge in blue_edges {
            let from = edge[0];
            let to = edge[1];
            blue_map.entry(from).or_default().push(to);
        }

        let mut blue_distances = Vec::new();
        blue_distances.resize(n as usize, i32::MAX);

        let mut red_distances = Vec::new();
        red_distances.resize(n as usize, i32::MAX);

        //bfs

        #[derive(Debug)]
        enum COLOR {
            RED,
            BLUE,
        }

        type Node = (i32, COLOR); //(节点名称 ,当前的颜色)

        let mut steps = -1;

        let mut queue: VecDeque<Node> = VecDeque::from([(0, COLOR::RED), (0, COLOR::BLUE)]);
        while (queue.len() > 0) {
            steps += 1;
            let curLen = queue.len();
            // println!("{queue:?}");
            for _ in 0..curLen {
                let node = queue.pop_front().unwrap();
                match node.1 {
                    COLOR::RED => {
                        if steps >= red_distances[node.0 as usize] {
                            continue;
                        }
                        red_distances[node.0 as usize] =
                            std::cmp::min(red_distances[node.0 as usize], steps);
                    }
                    COLOR::BLUE => {
                        if steps >= blue_distances[node.0 as usize] {
                            continue;
                        }
                        blue_distances[node.0 as usize] =
                            std::cmp::min(blue_distances[node.0 as usize], steps);
                    }
                }
                match node.1 {
                    COLOR::RED => {
                        if let Some(to_s) = blue_map.get(&node.0) {
                            for to in to_s {
                                queue.push_back((*to, COLOR::BLUE));
                            }
                        }
                    }
                    COLOR::BLUE => {
                        if let Some(to_s) = red_map.get(&node.0) {
                            for to in to_s {
                                queue.push_back((*to, COLOR::RED));
                            }
                        }
                    }
                }
            }
        }

        return red_distances
            .into_iter()
            .zip(blue_distances.into_iter())
            .map(|(dis1, dis2)| {
                let min = std::cmp::min(dis1, dis2);
                if (min == i32::MAX) {
                    return -1;
                }
                return min;
            })
            .collect();
    }
}