// lv1 정수 제곱근 판별
// https://programmers.co.kr/learn/courses/30/lessons/12934
function solution(n) {
  var rootN = Math.sqrt(n)
  return Number.isInteger(rootN) ? Math.pow(rootN + 1, 2) : -1;
}