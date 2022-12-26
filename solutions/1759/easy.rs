const MOD:i32=1000000007;

impl Solution {
    pub fn count_homogenous(s: String) -> i32 {
        let mut res = 0;
        let mut last_char = '_';
        let mut last_len = 0;

        for c in s.chars() {
            if (last_char == c) {
                last_len += 1;
            } else {
                last_len = 1;
                last_char = c;
            }
            res += last_len;
            res %= MOD;
        }

        return res;
    }
}