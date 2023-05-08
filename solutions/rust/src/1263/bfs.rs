impl Solution {
  pub fn min_push_box(grid: Vec<Vec<char>>) -> i32 {
      use std::collections::HashSet;
      const DIRS: [(i32, i32); 4] = [(1, 0), (0, 1), (-1, 0), (0, -1)];

      type Pos = (usize, usize);
      // 箱子r,c; 玩家r,c
      type State = (Pos, Pos);

      fn get_init_state(grid: &Vec<Vec<char>>) -> (State, Pos) {
          let mut init_state: State = ((0, 0), (0, 0));
          let mut t_pos: Pos = (0, 0);

          for r in 0..grid.len() {
              for c in 0..grid[0].len() {
                  if grid[r][c] == 'B' {
                      init_state.0 = (r, c);
                  }
                  if grid[r][c] == 'S' {
                      init_state.1 = (r, c);
                  }
                  if grid[r][c] == 'T' {
                      t_pos = (r, c);
                  }
              }
          }

          return (init_state, t_pos);
      }

      fn pos_to_key(grid: &Vec<Vec<char>>, pos: Pos) -> usize {
          return pos.0 * grid[0].len() + pos.1;
      }

      fn is_reachable(grid: &Vec<Vec<char>>, ori: Pos, target: Pos, box_pos: Pos) -> bool {
          let mut visited: HashSet<Pos> = HashSet::new();

          fn dfs(
              grid: &Vec<Vec<char>>,
              visited: &mut HashSet<Pos>,
              pos: Pos,
              target: Pos,
              box_pos: Pos,
          ) -> bool {
              let (r, c) = pos;

              if visited.contains(&pos) {
                  return false;
              }
              visited.insert(pos);

              if r >= grid.len() || c >= grid[0].len() {
                  return false;
              }

              if r == box_pos.0 && c == box_pos.1 {
                  return false;
              }

              if grid[r][c] == '#' {
                  return false;
              }

              if r == target.0 && c == target.1 {
                  return true;
              }

              return DIRS.iter().any(|&(diff_r, diff_c)| {
                  return dfs(
                      grid,
                      visited,
                      (r + diff_r as usize, c + diff_c as usize),
                      target,
                      box_pos,
                  );
              });
          }

          return dfs(grid, &mut visited, ori, target, box_pos);
      }

      let (init_state, t_pos) = get_init_state(&grid);

      let mut states = vec![init_state];
      let mut visited: HashSet<State> = HashSet::new();

      let mut steps = -1;
      while states.len() > 0 {
          steps += 1;
          // println!("{states:?}");
          let mut new_states = vec![];

          for state in states {
              if visited.contains(&state) {
                  continue;
              }
              visited.insert(state);

              let ((br, bc), (sr, sc)) = state;

              if br == t_pos.0 && bc == t_pos.1 {
                  return steps;
              }

              for i in 0..DIRS.len() {
                  let (diff_br, diff_bc) = DIRS[i];
                  let (diff_sr, diff_sc) = DIRS[(i + 2) % DIRS.len()];
                  let (new_br, new_bc) = (br + diff_br as usize, bc + diff_bc as usize);
                  let (new_sr, new_sc) = (br + diff_sr as usize, bc + diff_sc as usize);
                  // println!("{new_br}, {new_bc}),({new_sr}, {new_sc}");
                  if new_br >= grid.len()
                      || new_bc >= grid[0].len()
                      || new_sr >= grid.len()
                      || new_sc >= grid[0].len()
                  {   
                      continue;
                  }

                  if grid[new_br][new_bc] == '#' || grid[new_sr][new_sc] == '#' {
                      continue;
                  }

                  if !is_reachable(&grid, (sr, sc), (new_sr, new_sc), (br, bc)) {
                      continue;
                  }
                  new_states.push(((new_br, new_bc), (br, bc)));
              }
          }

          states = new_states;
      }

      -1
  }
}