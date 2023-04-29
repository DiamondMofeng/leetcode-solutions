use std::collections::HashMap;

impl Solution {
    pub fn equal_frequency(word: String) -> bool {
        let counter: HashMap<u8, i32> =
            word.as_bytes().iter().fold(HashMap::new(), |mut map, &ch| {
                *map.entry(ch).or_default() += 1;
                return map;
            });

        let mut values: Vec<i32> = counter.into_values().collect();
        values.sort();
        let n = values.len();

        return values.len() == 1
            || (values[0] == 1
                && values.iter().skip(1).filter(|&&v| v == values[1]).count() == n - 1)
            || (values[n - 1] - 1 == values[n - 2]
                && values.iter().filter(|&&v| v == values[n - 2]).count() == n - 1);
    }
}