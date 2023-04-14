function isUpperCase(c) {
  return c <= "Z" && c >= "A";
}

/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  return queries.map((q) => {
    let qi = 0;
    for (let pc of pattern) {
      while (qi < q.length && q[qi] !== pc) {
        // 如果qi是大写但pc不是大写，则return false
        if (isUpperCase(q[qi])) {
          return false;
        }
        qi++;
      }
      if (qi >= q.length) {
        return false;
      }

      qi++;
    }

    // 如果后面还有大写，则false
    if (q.slice(qi).match(/[A-Z]/)) {
      return false;
    }

    return true;
  });
};
