/*
 * // This is the custom function interface.
 * // You should not implement it, or speculate about its implementation
 * struct CustomFunction;
 * impl CustomFunction {
 *    pub fn f(x:i32,y:i32)->i32{}
 * }
 */

 impl Solution {
  pub fn find_solution(customfunction: &CustomFunction, z: i32) -> Vec<Vec<i32>> {
      let mut results = vec![];

      let mut x = 1;
      let mut y = 1000;

      while x <= 1000 && y >= 1 {
          let res = customfunction.f(x, y);
          if res == z {
              results.push(vec![x, y]);
              y -=1;
              x +=1;
          } else if res > z {
              y -= 1;
          } else {
              x += 1;
          }
      }

      results
  }
}