/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  if (this.length !== rowsCount * colsCount) {
    return [];
  }

  return new Array(rowsCount)
    .fill()
    .map((_, r) =>
      new Array(colsCount)
        .fill()
        .map((_, c) =>
          c % 2 === 0
            ? this[c * rowsCount + r]
            : this[(c + 1) * rowsCount - r - 1]
        )
    );
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
