impl Solution {
  pub fn valid_path(n: i32, edges: Vec<Vec<i32>>, source: i32, destination: i32) -> bool {
      
      //并查集
      use std::iter::FromIterator;
      let mut uf = Vec::from_iter(0..n as usize);
      fn find(uf: &mut Vec<usize>, x: usize) -> usize {
          if (uf[x] != x) {
              uf[x] = find(uf, uf[x]);
          }
          return uf[x];
      }

      fn union(uf: &mut Vec<usize>, a: usize, b: usize) {
          let root_a = find(uf, a);
          uf[root_a] = find(uf, b);
      }

      for edge in edges {
          union(&mut uf, edge[0] as usize, edge[1] as usize);
      }

      return find(&mut uf, source as usize) == find(&mut uf, destination as usize);
  }
}