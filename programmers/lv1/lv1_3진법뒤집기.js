// lv1 3진법 뒤집기
// https://programmers.co.kr/learn/courses/30/lessons/68935?language=javascript
function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}