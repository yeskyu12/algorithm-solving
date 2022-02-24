function solution(n) {
  var rootN = Math.sqrt(n)
  return Number.isInteger(rootN) ? Math.pow(rootN + 1, 2) : -1;
}