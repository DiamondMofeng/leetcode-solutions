class Trie {
  constructor() {
    this.map = {}
  }

  add(str) {
    let node = this.map;
    for (const c of str) {
      node = (node[c] ||= {})
    }
  }
}

/**
* @param {string[]} words
* @param {string} target
* @return {number}
*/
var minValidStrings = function (words, target) {
  const n = target.length

  let trie = new Trie()
  for (const w of words) {
    trie.add(w)
  }

  const cache = new Array(n).fill(0)
  const dfs = (i) => {
    if (i >= n) {
      return 0;
    }

    if (cache[i]) {
      return cache[i]
    }
    cache[i] = Infinity

    let node = trie.map

    let res = Infinity;
    for (let j = i; j < n; j++) {
      const c = target[j]
      node = node[c]
      if (!node) {
        break;
      }

      let next = dfs(j + 1) + 1
      if (next < res) {
        res = next
      }
    }

    cache[i] = res
    return res;
  }

  let res = dfs(0)
  if (res === Infinity) {
    return -1
  }
  return res;

};