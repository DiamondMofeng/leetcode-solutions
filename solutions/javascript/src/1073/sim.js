/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function (arr1, arr2) {
  let res = [];
  let p1 = arr1.length - 1;
  let p2 = arr2.length - 1;
  let carry = 0;
  while (p1 >= 0 || p2 >= 0 || carry !== 0) {
    if (p1 >= 0) {
      carry += arr1[p1];
    }
    if (p2 >= 0) {
      carry += arr2[p2];
    }

    if (carry >= 2) {
      res.push(carry - 2);
      carry = -1;
    } else if (carry >= 0) {
      res.push(carry);
      carry = 0;
    } else {
      //-1
      res.push(1);
      carry = 1;
    }

    p1 -= 1;
    p2 -= 1;
  }

  while (res.length > 1 && res[res.length - 1] === 0) {
    res.pop();
  }

  return res.reverse();
};
