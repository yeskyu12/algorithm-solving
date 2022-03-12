// lv1 문자열 다루기 기본 2
// https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascript
function solution(s) {
  return /^\d{6}$|^\d{4}$/.test(s);
}