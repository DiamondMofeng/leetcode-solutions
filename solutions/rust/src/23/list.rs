// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
//
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {

  pub fn merge_k_lists(lists: Vec<Option<Box<ListNode>>>) -> Option<Box<ListNode>> {
      use std::collections::BinaryHeap;
      
      impl PartialOrd for ListNode {
          fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
              return Some(self.cmp(other));
          }
      }

      // 反向排序，小的在前
      impl Ord for ListNode {
          fn cmp(&self, other: &Self) -> std::cmp::Ordering {
              return other.val.cmp(&self.val);
          }
      }

      let mut pq = BinaryHeap::new();
      for list in lists {
          if let Some(node) = list {
              pq.push(node);
          }
      }

      let mut head: Option<Box<ListNode>> = None;
      // 通过 tail=tail.insert.next 的方法移动
      let mut tail = &mut head;

      while let Some(mut node) = pq.pop() {
          if let Some(next) = node.next.take() {
              pq.push(next);
          }
          tail = &mut tail.insert(node).next;
      }

      return head;
  }
}