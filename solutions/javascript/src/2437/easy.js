/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {

  let h = 1;
  if (time[0] === '?' && time[1] === '?') { h = 24 }
  else if (time[0] === '?') { h = time[1] <= '3' ? 3 : 2 }
  else if (time[1] === '?') { h = time[0] < '2' ? 10 : 4 }

  let m = 1;
  if (time[3] === '?' && time[4] === '?') { m = 60 }
  else if (time[3] === '?') { m = 6 }
  else if (time[4] === '?') { m = time[3] === '6' ? 1 : 10 }

  return h * m

};