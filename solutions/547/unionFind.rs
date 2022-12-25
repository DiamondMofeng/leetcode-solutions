impl Solution {
  pub fn find_circle_num(is_connected: Vec<Vec<i32>>) -> i32 {
      let n = is_connected.len(); //城市的数量
      let mut UF = vec![0; n];
      for i in 0..n {
          UF[i] = i;
      }

      fn find(UF: &mut Vec<usize>, x: usize) -> usize {
          if (x != UF[x]) {
              UF[x]=find(UF,UF[x])    //路径压缩
          }
          return UF[x];
      }

      fn union(UF: &mut Vec<usize>, x: usize, y: usize) {
          let rootX = find(UF, x);
          let rootY = find(UF, y);
          if (rootX != rootY) {
              UF[rootX] = rootY;
          }
      }

      let mut indie_cities = n;
      //init
      for r in 0..is_connected.len() {
          for c in 0..is_connected[0].len() {
              if (is_connected[r][c] == 1 && find(&mut UF, r) != find(&mut UF, c)) {
                  union(&mut UF, r, c);
                  indie_cities -= 1;
              }
          }
      }
      return indie_cities as i32;
  }
}