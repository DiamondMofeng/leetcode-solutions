use std::collections::BTreeSet;

struct DinnerPlates {
    capacity: usize,

    // 有空位的栈下标
    available_stacks: BTreeSet<usize>,
    stacks: Vec<Vec<i32>>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl DinnerPlates {
    fn new(capacity: i32) -> Self {
        return DinnerPlates {
            capacity: capacity as usize,
            available_stacks: BTreeSet::new(),
            stacks: vec![],
        };
    }

    fn remove_last_stack(&mut self) {
        self.available_stacks.remove(&(self.stacks.len() - 1));
        self.stacks.pop();
    }

    fn push(&mut self, val: i32) {
        // 查找可用空间
        let first = self.available_stacks.iter().next();

        // 有现存的可用空间
        if let Some(&idx) = first {
            self.stacks[idx].push(val);
            if self.stacks[idx].len() == self.capacity {
                self.available_stacks.remove(&idx);
            }
        } else {
            self.stacks.push(vec![val]);
            if self.capacity != 1 {
                self.available_stacks.insert(self.stacks.len() - 1);
            }
        }
    }

    fn pop(&mut self) -> i32 {
        while let Some(stack) = self.stacks.last_mut() {
            if stack.len() == 0 {
                self.remove_last_stack();
                continue;
            }

            let res = *stack.last().unwrap();
            stack.pop();

            if stack.len() == 0 {
                self.remove_last_stack();
            } else if stack.len() < self.capacity {
                self.available_stacks.insert(self.stacks.len() - 1);
            }

            return res;
        }
        return -1;
    }

    fn pop_at_stack(&mut self, index: i32) -> i32 {
        let index = index as usize;
        if self.stacks.len() < index {
            return -1;
        }

        let stack = &mut self.stacks[index];

        if let Some(&res) = stack.last() {
            stack.pop();
            if stack.len() < self.capacity {
                self.available_stacks.insert(index);
            }

            return res;
        }

        return -1;
    }
}
