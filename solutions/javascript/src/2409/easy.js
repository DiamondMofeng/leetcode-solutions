const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function calcDays(date) {
  const [month, day] = date.split("-").map((num) => parseInt(num));
  let daysBeforeCurrentMonth = 0;
  for (let i = 0; i < month - 1; i++) {
    daysBeforeCurrentMonth += DAYS[i];
  }

  return daysBeforeCurrentMonth + day;
}

/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (
  arriveAlice,
  leaveAlice,
  arriveBob,
  leaveBob
) {
  return Math.max(
    0,
    Math.min(calcDays(leaveAlice), calcDays(leaveBob)) -
      Math.max(calcDays(arriveBob), calcDays(arriveAlice)) +
      1
  );
};
