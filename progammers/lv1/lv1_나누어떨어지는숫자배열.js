// lv1 나누어 떨어지는 숫자 배열
// https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript
function solution(arr, divisor) {
  const answer = arr.filter((number) => number % divisor === 0).sort((a, b) => a - b);
  return answer.length > 0 ? answer : [-1];
}