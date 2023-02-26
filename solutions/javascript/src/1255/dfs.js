/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
  let counter = _.countBy(letters)
  let wordScore = words.map(word =>
    [...word].reduce((sum, char) =>
      sum + score[char.charCodeAt(0) - 'a'.charCodeAt(0)]
      , 0)
  )
  // console.log(wordScore)
  function isEnough(word) {
    let wordCounter = _.countBy(word);
    return Object
      .entries(wordCounter)
      .every(([key, val]) => {
        return counter[key] >= val
      })
  }
  function consume(word) {
    for (const char of word) {
      counter[char] -= 1;
    }
  }
  function resume(word) {
    for (const char of word) {
      counter[char] += 1;
    }
  }

  let maxScore = 0;
  let curScore = 0;

  function dfs(curIdx) {
    if (curIdx >= words.length) {
      return;
    }
    let word = words[curIdx]
    // 不选当前word
    dfs(curIdx + 1);
    // 选当前word
    if (isEnough(word)) {
      consume(word)
      curScore += wordScore[curIdx]
      maxScore = Math.max(maxScore, curScore)
      dfs(curIdx + 1)
      //回溯
      resume(word)
      curScore -= wordScore[curIdx]
    }
  }
  dfs(0);
  return maxScore

};