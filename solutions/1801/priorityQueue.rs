use std::{cmp::Reverse, collections::BinaryHeap};

impl Solution {
    pub fn get_number_of_backlog_orders(orders: Vec<Vec<i32>>) -> i32 {
        type Order = (i32, i32);

        //buy队头是最大的，
        //sell队头是最小的
        let mut buy_orders: BinaryHeap<Order> = BinaryHeap::new();
        let mut sell_orders = BinaryHeap::new();

        for order in orders {
            let price = order[0];
            let mut amount = order[1];

            if (order[2] == 1) {
                //sell单
                while (amount > 0 && buy_orders.len() > 0 && buy_orders.peek().unwrap().0 >= price)
                {
                    let (buy_price, mut buy_amount) = buy_orders.pop().unwrap();
                    let max_can_deal = amount.min(buy_amount);

                    amount -= max_can_deal;
                    buy_amount -= max_can_deal;

                    if (buy_amount > 0) {
                        buy_orders.push((buy_price, buy_amount));
                        break;
                    }
                }

                if (amount > 0) {
                    sell_orders.push(Reverse((price, amount)));
                }
            } else {
                //buy单
                while (amount > 0
                    && sell_orders.len() > 0
                    && sell_orders.peek().unwrap().0 .0 <= price)
                {
                    let (sell_price, mut sell_amount) = sell_orders.pop().unwrap().0;
                    let max_can_deal = amount.min(sell_amount);

                    amount -= max_can_deal;
                    sell_amount -= max_can_deal;

                    if (sell_amount > 0) {
                        sell_orders.push(Reverse((sell_price, sell_amount)));
                        break;
                    }
                }

                if (amount > 0) {
                    buy_orders.push((price, amount));
                }
            }
        }

        const MOD: i32 = 1000000007;

        return (buy_orders.into_iter().fold(0, |sum, o| (sum + o.1) % MOD)
            + sell_orders
                .into_iter()
                .fold(0, |sum, o| (sum + o.0 .1) % MOD))
            % MOD;
    }
}
