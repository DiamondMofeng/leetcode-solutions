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
  pub fn merge_two_lists(
      mut list1: Option<Box<ListNode>>,
      mut list2: Option<Box<ListNode>>,
  ) -> Option<Box<ListNode>> {
      let mut dummy = ListNode { val: 0, next: None };

      let mut p = &mut dummy;

      let mut p1 = &mut list1;
      let mut p2 = &mut list2;

      while !p1.is_none() && !p2.is_none() {
          let v1 = p1.as_deref().unwrap().val;
          let v2 = p2.as_deref().unwrap().val;

          if v1 < v2 {
              p.next = p1.clone();
              p = p.next.as_deref_mut().unwrap();
              p1 = &mut p1.as_deref_mut().unwrap().next;
          } else {
              p.next = p2.clone();
              p = p.next.as_deref_mut().unwrap();
              p2 = &mut p2.as_deref_mut().unwrap().next;
          }
      }

      if !p1.is_none() {
          p.next = p1.clone();
      }

      if !p2.is_none() {
          p.next = p2.clone();
      }

      return dummy.next;
  }
}