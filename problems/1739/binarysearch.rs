impl Solution {
    pub fn minimum_boxes(n: i32) -> i32 {
        let mut list = Vec::from([0]);
        /**
         * 每一层可以准许下一层的数量
         * 3->1
         * 5->2
         * 6->3
         * 8->4
         * 9->5
         * 10->6
         *
         * [1,3,6,10,15,...]
         *  0 1 3 6  10
         * 设入参为n，先通过等差数列找出第一个大于等于的位置i
         * 则准许数量=list[i-1]+ max(0,n-(list[i]+1))
         *
         */
        let mut next = |n: i32| -> i32 {
            while *list.last().unwrap() <= n {
                let last = *list.last().unwrap();
                list.push(last + list.len() as i32);
            }

            if (n <= 2) {
                return 0;
            }
            //二分找第一个严格大于n的下标
            let mut l = 0;
            let mut r = list.len();
            //[l,r)

            while (l < r) {
                let mid = (l + r) >> 1;

                if (list[mid] <= n) {
                    l = mid + 1;
                } else {
                    r = mid;
                }
            }
            l -= 1;

            return list[l - 1] + std::cmp::max(0, n - (list[l] + 1));
        };

        let mut check = |cur: i32| -> bool {
            let mut sum = cur;
            let mut next_val = next(cur);
            while (next_val > 0) {
                sum += next_val;
                next_val = next(next_val);
                if (sum >= n) {
                    return true;
                }
            }

            return sum >= n;
        };

        //二分查找最小可行解

        let mut l = 0;
        let mut r = n;
        //[l,r)
        while (l < r) {
            let mid = (l + r) >> 1;
            if (check(mid)) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        return l;
    }
}
