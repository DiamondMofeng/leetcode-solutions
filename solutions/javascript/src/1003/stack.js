/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let c of s) {
    stack.push(c);
    if (stack.length >= 3 && stack.slice(-3).join("") === "abc") {
      stack.pop();
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
};
