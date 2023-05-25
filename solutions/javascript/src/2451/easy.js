/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {

  function getDiffArrKey(word) {
      const arr = []
      for (let i = 1; i < word.length; i++) {
          arr.push(word[i].charCodeAt(0) - word[i - 1].charCodeAt(0))
      }
      return arr.join(' ')
  }

  function findDiffKey() {
      const counter = {}
      for (let i = 0; i < words.length; i++) {
          const word = words[i]

          const key = getDiffArrKey(word)
          counter[key] ??= 0
          counter[key] += 1

          if (i >= 2 && Object.keys(counter).length >= 2) {
              return Object.entries(counter).find(([k, v]) => v === 1)[0]
          }
      }

      throw new Error('输入的words不满足条件')
  }

  const uniqueKey = findDiffKey()

  return words.find((word) => getDiffArrKey(word) === uniqueKey)
};