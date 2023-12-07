impl Solution {
  pub fn min_reorder(n: i32, connections: Vec<Vec<i32>>) -> i32 {
      const Forward: usize = 0;
      const Backward: usize = 1;

      let mut g = vec![vec![]; n as usize];
      connections.into_iter().for_each(|c| {
          let from = c[0] as usize;
          let to = c[1] as usize;
          g[from].push((to, Forward));
          g[to].push((from, Backward));
      });

      let mut res = 0;

      fn dfs(g: &Vec<Vec<(usize, usize)>>, res: &mut i32, node: usize, fa: usize) {
          for &(to, dir) in g[node].iter() {
              if to == fa {
                  continue;
              }
              if dir == Backward {
                  *res += 1;
              }
              dfs(g, res, to, node);
          }
      }

      dfs(&g, &mut res, 0, 100000);

      return res;
  }
}
