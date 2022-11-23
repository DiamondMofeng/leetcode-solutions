impl Solution {
  pub fn eventual_safe_nodes(graph: Vec<Vec<i32>>) -> Vec<i32> {
      let n = graph.len();

      const NON_SAFE: i32 = 1;
      const SAFE: i32 = 2;
      const NON_VISITED: i32 = 0;
      const VISITED: i32 = 3;

      let mut point_status = vec![NON_VISITED; n];

      fn dfs(point_status: &mut Vec<i32>, graph: &Vec<Vec<i32>>, node: usize) -> i32 {
          match point_status[node] {
              NON_SAFE | SAFE => return point_status[node],
              VISITED => {
                  point_status[node] = NON_SAFE;
                  return point_status[node];
              }
              _ => (),
          }

          point_status[node] = VISITED;

          if (graph[node]
              .iter()
              .all(|next_node| dfs(point_status, graph, *next_node as usize) == SAFE))
          {
              point_status[node] = SAFE;
          } else {
              point_status[node] = NON_SAFE;
          }

          return point_status[node];
      }

      for i in 0..n {
          dfs(&mut point_status, &graph, i);
      }

      return (0..n)
          .filter(|i| point_status[*i] == SAFE)
          .map(|i| i as i32)
          .collect();
  }
}