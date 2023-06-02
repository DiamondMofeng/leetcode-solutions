function isVowelString(s) {
  return [s[0], s.at(-1)].every((c) => ['a', 'e', 'i', 'o', 'u'].includes(c))
}

/**
* @param {string[]} words
* @param {number[][]} queries
* @return {number[]}
*/
var vowelStrings = function (words, queries) {
  let prefixSum = [0]
  for (let word of words) {
      prefixSum.push(prefixSum.at(-1) + isVowelString(word))
  }

  return queries.map(([begin, end]) =>
      prefixSum[end + 1] - prefixSum[begin]
  )
};