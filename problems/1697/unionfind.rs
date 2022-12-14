impl Solution {
  pub fn distance_limited_paths_exist(
      n: i32,
      mut edge_list: Vec<Vec<i32>>,
      queries: Vec<Vec<i32>>,
  ) -> Vec<bool> {
      let n = n as usize;

      edge_list.sort_by_cached_key(|edge| edge[2]);

      use std::iter::FromIterator;
      let mut queries_order = Vec::from_iter(0..queries.len());
      queries_order.sort_by_cached_key(|idx| queries[*idx][2]);

      // 并查集
      let mut uf = Vec::from_iter(0..n);

      fn find(uf: &mut Vec<usize>, x: usize) -> usize {
          if (uf[x] != x) {
              uf[x] = find(uf, uf[x]);
          }
          return uf[x];
      }

      fn merge(uf: &mut Vec<usize>, a: usize, b: usize) {
          let root_a = find(uf, a);
          uf[root_a] = find(uf, b);
      }

      let mut edge_idx: usize = 0;

      let mut res = vec![false; queries.len()];
      // 按query所需长度从低到高将满足条件的edge两节点归入同一集合
      for (query_idx) in queries_order.into_iter() {
          while (edge_idx < edge_list.len() && edge_list[edge_idx][2] < queries[query_idx][2]) {
              merge(
                  &mut uf,
                  edge_list[edge_idx][0] as usize,
                  edge_list[edge_idx][1] as usize,
              );
              edge_idx += 1;
          }
          res[query_idx] = find(&mut uf, queries[query_idx][0] as usize)
              == find(&mut uf, queries[query_idx][1] as usize);
      }
      return res;
  }
}