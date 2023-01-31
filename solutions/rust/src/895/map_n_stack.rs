use std::collections::HashMap;

 #[derive(Debug)]
struct FreqStack {
        /** Freq of a val */
        freqOf: HashMap<i32, i32>,
        /** vec of elements have same freq */
        freqStackAt: HashMap<i32, Vec<i32>>,
        maxFreq: i32,
    }

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl FreqStack {
        fn new() -> Self {
            FreqStack {
                freqOf: HashMap::new(),
                freqStackAt: HashMap::new(),
                maxFreq: 0,
            }
        }

        fn push(&mut self, val: i32) {
            *(self.freqOf.entry(val).or_default()) += 1;
            self.maxFreq = std::cmp::max(self.maxFreq, *self.freqOf.get(&val).unwrap());
            let mut _vec = self
                .freqStackAt
                .entry(self.freqOf[&val])
                .or_default()
                .push(val);
            // println!("push:{self:?}");
        }

        fn pop(&mut self) -> i32 {
            let mut _vec = self.freqStackAt.get_mut(&self.maxFreq).unwrap();
            let res = _vec.pop().unwrap();
            *self.freqOf.get_mut(&res).unwrap() -= 1;
            if (_vec.len() == 0) {
                self.maxFreq -= 1;
            }

            // println!("push:{self:?}");

            res
        }
    }

/**
 * Your FreqStack object will be instantiated and called as such:
 * let obj = FreqStack::new();
 * obj.push(val);
 * let ret_2: i32 = obj.pop();
 */