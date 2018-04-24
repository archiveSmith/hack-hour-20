/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  const finalArr = [];
  finalArr.push(array[0]);
  console.log(finalArr)
  for (let i = 1; i < array.length; i += 1) {
    for (let j = 0; j < finalArr.length; j += 1) {
      if (array[i][0] >= finalArr[j][0] && array[i][0] <= finalArr[j][1]) {
        finalArr[j][1] = array[i][1];
      }
    }
    finalArr.push(array[i]);
  }
  return finalArr;
}

module.exports = mergeRanges;

let times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

console.log(mergeRanges(times));// -> [[0, 1], [3, 8], [9, 12]]