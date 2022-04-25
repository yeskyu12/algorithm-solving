// lv1 문자열 다루기 기본
// https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascript
function solution(s) {
  return /^[0-9]{4}|^[0-9]{6}/g.test(s) && (s.length == 4 || s.length == 6);
}