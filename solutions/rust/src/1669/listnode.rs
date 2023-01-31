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
  pub fn merge_in_between(
      mut list1: Option<Box<ListNode>>,
      a: i32,
      b: i32,
      list2: Option<Box<ListNode>>,
  ) -> Option<Box<ListNode>> {
      type NodePtr = Option<Box<ListNode>>;

      let mut p = &mut list1;

      for _ in 0..a - 1 {
          p = &mut p.as_deref_mut().unwrap().next;
      }

      // (p == a-1) -> list2,
      // node_a == a
      let mut node_a = std::mem::replace(&mut p.as_deref_mut().unwrap().next, list2);

      // 顺着原链表上的node_a走，找到b
      for _ in a..=b {
          node_a = node_a.unwrap().next;
      }
      // 此时node_a即为b

      // 顺着p走到最后，即为list2的末端
      while let Some(_node) = &mut p.as_deref_mut().unwrap().next {
          p = &mut p.as_deref_mut().unwrap().next;
      }

      // 将p与node_b(变量为node_a)接起来
      p.as_deref_mut().unwrap().next = node_a;

      return list1;
  }
}