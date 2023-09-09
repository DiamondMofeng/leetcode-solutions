impl Solution {
  pub fn can_finish(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> bool {
      let n = num_courses as usize;
      let mut graph = vec![vec![]; n];

      let mut ranks= vec![0; n];
      for pre in prerequisites.iter() {
          if let [to, from] = pre[..] {
              graph[from as usize].push(to);
              ranks[to as usize] += 1;
          }
      }

      let mut queue: Vec<usize> = ranks
          .iter()
          .enumerate()
          .filter(|(_, &r)| r == 0)
          .map(|(i, _)| i)
          .collect();

      while let Some(from) = queue.pop() {
          for &to in graph[from].iter() {
              ranks[to as usize] -= 1;
              if ranks[to as usize] == 0 {
                  queue.push(to as usize);
              }
          }
      }

      return ranks.iter().all(|&r| r == 0);
  }
}