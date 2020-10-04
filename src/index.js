
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0
      || matrix.length === 0) {
        return [];
      }
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    if (!(i & 1)) { // if i is even
      result = result.concat(matrix[i]);
    } else {
      result = result.concat(matrix[i].reverse());
    }
  }
  return result;
}
