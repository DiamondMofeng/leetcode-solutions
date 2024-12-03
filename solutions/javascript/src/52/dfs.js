/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  // r * n + c
  const queens = []

  const check = (r, c) => {
    for (const q of queens) {
      const qr = Math.floor(q / n)
      const qc = q % n

      if (qr === r) {
        return false;
      }
      if (qc === c) {
        return false
      }
      // 对角线
      if (r - c === qr - qc) {
        return false
      }
      if (r + c === qr + qc) {
        return false
      }
    }

    return true
  }

  let res = 0;

  const dfs = (r, c) => {
    if (queens.length === n) {
      res += 1
      return;
    }

    if (r >= n) {
      return;
    }

    const ok = check(r, c)
    // 放
    if (ok) {
      queens.push(r * n + c)
      dfs(r + (c + 1 === n), (c + 1) % n)
      queens.pop()
    }

    // 不放
    dfs(r + (c + 1 === n), (c + 1) % n)
  }

  dfs(0, 0)

  return res;
};
