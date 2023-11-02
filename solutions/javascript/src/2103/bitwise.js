const colorMaskMap = {
  R: 1,
  G: 2,
  B: 4,
}
const FULL = 7

/**
* @param {string} rings
* @return {number}
*/
var countPoints = function (rings) {
  const ownedColors = new Array(10).fill(0)

  for (let i = 0; i < rings.length; i += 2) {
      const color = rings[i]
      const ring = rings[i + 1]

      ownedColors[ring] |= colorMaskMap[color]
  }

  return ownedColors.reduce((sum, mask) => sum + (mask === FULL), 0)
};