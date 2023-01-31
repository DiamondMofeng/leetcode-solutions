use std::{
  cmp::Ordering,
  collections::{BinaryHeap, HashMap},
};
#[derive(Eq)]
struct Node(usize, i32);
impl PartialOrd for Node {
  fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
      Some((other.1).cmp(&self.1))
  }
}
impl PartialEq for Node {
  fn eq(&self, other: &Self) -> bool {
      self.1 == other.1
  }
}
impl Ord for Node {
  fn cmp(&self, other: &Self) -> Ordering {
      (other.1).cmp(&self.1)
  }
}
impl Solution {
  pub fn reachable_nodes(edges: Vec<Vec<i32>>, max_moves: i32, n: i32) -> i32 {
      let n = n as usize;
      //map[from][to] == weight
      let mut map: HashMap<i32, HashMap<i32, i32>> = HashMap::new();
      for edge in edges.iter() {
          let from = edge[0];
          let to = edge[1];
          let distance = edge[2];
          map.entry(from)
              .or_insert(HashMap::new())
              .entry(to)
              .or_insert(distance + 1);
          map.entry(to)
              .or_insert(HashMap::new())
              .entry(from)
              .or_insert(distance + 1);
      }
      //for dijkstre : (node, distance from 0 to node)
      let mut pq: BinaryHeap<Node> = BinaryHeap::new();

      //distance from 0 to i
      let mut distances = vec![i32::MAX; n];
      distances[0] = 0;

      //* run dijkstre

      pq.push(Node(0, 0));
      while (!pq.is_empty()) {
          let node = pq.pop().unwrap();

          //最近的节点也不可达了，所以break
          if (distances[node.0] >= max_moves) {
              break;
          }

          if let Some(next_n_weight) = map.get(&(node.0 as i32)) {
              for (to, weight) in next_n_weight.iter() {
                  let to = *to as usize;
                  if (distances[to] > distances[node.0] + weight) {
                      distances[to] = distances[node.0] + weight;
                      pq.push(Node(to, distances[to]));
                  }
              }
          }
      }

      let mut res = 0;

      //可达的大节点
      for d in distances.iter() {
          if (*d <= max_moves) {
              res += 1;
          }
      }

      //小节点
      for edge in edges.iter() {
          let from = edge[0] as usize;
          let to = edge[1] as usize;
          let small_nodes = edge[2];

          res += std::cmp::min(
              small_nodes,
              std::cmp::max(0, max_moves - distances[from])
                  + std::cmp::max(0, max_moves - distances[to]),
          );
      }

      return res;
  }
}