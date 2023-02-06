// Definition for a binary tree node.
// use std::cell::RefCell;
// use std::rc::Rc;
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//     pub val: i32,
//     pub left: Option<Rc<RefCell<TreeNode>>>,
//     pub right: Option<Rc<RefCell<TreeNode>>>,
// }

// impl TreeNode {
//     #[inline]
//     pub fn new(val: i32) -> Self {
//         TreeNode {
//             val,
//             left: None,
//             right: None,
//         }
//     }
// }

// struct Solution {}

fn main() {
    use std::cell::RefCell;
    use std::rc::Rc;

    const FALSE: i32 = 0;
    const TRUE: i32 = 1;
    const OR: i32 = 2;
    const AND: i32 = 3;

    impl Solution {
        pub fn evaluate_tree(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
            type NodePtr = Rc<RefCell<TreeNode>>;

            fn dfs(node: &Option<NodePtr>) -> bool {
                if let Some(node_ref) = node {
                    let node = node_ref.borrow();
                    return match node.val {
                        TRUE => true,
                        FALSE => false,
                        AND => dfs(&node.left) && dfs(&node.right),
                        OR => dfs(&node.left) || dfs(&node.right),
                        _ => false,
                    };
                }

                false
            }

            return dfs(&root);
        }
    }
}
