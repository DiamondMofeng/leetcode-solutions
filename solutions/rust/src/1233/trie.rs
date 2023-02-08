impl Solution {
  pub fn remove_subfolders(folder: Vec<String>) -> Vec<String> {
      use std::collections::HashMap;
      // 字典树
      #[derive(Debug)]
      struct TreeNode {
          name: String,
          is_parent: bool,
          sub_tree: HashMap<String, TreeNode>,
      }

      fn insert_to_trie(mut trie: &mut TreeNode, path: String) {
          let mut names = path.split('/');
          names.next(); // consume white space

          for name in names {
              if trie.is_parent {
                  return;
              }
              trie = trie.sub_tree.entry(name.to_string()).or_insert(TreeNode {
                  name: name.to_string(),
                  is_parent: false,
                  sub_tree: HashMap::new(),
              });
          }
          trie.is_parent = true;
          // println!("{names:?}");
      }

      let mut trie = TreeNode {
          name: "".to_string(),
          is_parent: false,
          sub_tree: HashMap::new(),
      };

      folder
          .into_iter()
          .for_each(|path| insert_to_trie(&mut trie, path));

      //collect
      // println!("{trie:?}");
      let mut res = Vec::new();
      let mut cur_path = Vec::new();

      fn combo_path(cur_path: &mut Vec<String>) -> String {
          return cur_path.join("/");
      }

      fn dfs(trie: &TreeNode, res: &mut Vec<String>, cur_path: &mut Vec<String>) {
          cur_path.push(trie.name.clone());
          if trie.is_parent {
              //拼接path
              res.push(combo_path(cur_path));
          } else {
              for sub_trie in trie.sub_tree.values() {
                  dfs(sub_trie, res, cur_path);
              }
          }
          cur_path.pop();
      }

      dfs(&trie, &mut res, &mut cur_path);

      return res;
  }
}