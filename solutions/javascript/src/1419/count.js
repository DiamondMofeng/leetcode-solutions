const BEFORE = {
  'c': null,
  'r': 'c',
  'o': 'r',
  'a': 'o',
  'k': 'a'
}

/**
* @param {string} croakOfFrogs
* @return {number}
*/
var minNumberOfFrogs = function (croakOfFrogs) {
  if (croakOfFrogs.length % 5 !== 0) {
      return -1
  }

  let res = 0;
  let frogs = 0;

  let map = Object.fromEntries(
      [..."croak"].map((c) => [c, 0])
  );
  for (let c of croakOfFrogs) {
      map[c] += 1;
      if (c === 'c') {
          frogs += 1;
      } else if (c === 'k') {
          frogs -= 1;
      }

      if (BEFORE[c]) {
          if (map[c] > map[BEFORE[c]] ?? 0) {
              return -1
          }
      }

      res = Math.max(res, frogs)
  }

  return Object.values(map).every((cnt) => cnt === map['c'])
      ? res
      : -1;
};