/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  if (suits.every(s => s === suits[0])) {
      return "Flush"
  }

  let ranksCounter = _.countBy(ranks);
  if (Object.values(ranksCounter).some(c => c >= 3)) {
      return "Three of a Kind"
  }
  if (Object.values(ranksCounter).some(c => c >= 2)) {
      return "Pair"
  }
  return "High Card"

};