impl Solution {
    pub fn find_length_of_shortest_subarray(arr: Vec<i32>) -> i32 {
        let n = arr.len();
        let mut r = n - 1;
        while r > 0 && arr[r - 1] <= arr[r] {
            r -= 1
        }

        if r == 0 {
            return 0;
        }

        let mut res = r;

        for l in 0..n {
            while r < n && arr[r] < arr[l] {
                r += 1;
            }
            res = res.min(r - l - 1);
            if l + 1 < n && arr[l] > arr[l + 1] {
                break;
            }
        }

        return res as i32;
    }
}
