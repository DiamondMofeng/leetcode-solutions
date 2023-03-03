impl Solution {
    pub fn get_folder_names(names: Vec<String>) -> Vec<String> {
        use std::collections::HashMap;

        let n = names.len();
        // 已存下的名字
        let mut res = Vec::with_capacity(n);
        // 基础名字：最小可用下标
        let mut map: HashMap<String, i32> = HashMap::with_capacity(n);

        for name in names {
            if !map.contains_key(&name) {
                map.insert(name.clone(), 1);
                res.push(name);
                continue;
            }
            let mut cnt = *map.get(&name).unwrap();
            while map.contains_key(&format!("{}({})", name, cnt)) {
                cnt = cnt + 1
            }
            let new_name = format!("{}({})", name, cnt);
            map.insert(new_name.clone(), 1);
            map.insert(name.clone(), cnt + 1);
            res.push(new_name);
        }

        return res;
    }
}
