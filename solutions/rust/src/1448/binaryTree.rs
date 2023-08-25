// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
//
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn good_nodes(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        fn dfs(node: &Option<Rc<RefCell<TreeNode>>>, max_val: i32) -> i32 {
            if let Some(node) = node {
                let node = node.as_ref().borrow();

                return dfs(&node.left, node.val.max(max_val))
                    + dfs(&node.right, node.val.max(max_val))
                    + if node.val >= max_val { 1 } else { 0 };
            } else {
                0
            }
        }

        return dfs(&root, -10001);
    }
}