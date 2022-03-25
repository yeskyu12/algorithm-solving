// lv1 음양 더하기
// https://programmers.co.kr/learn/courses/30/lessons/76501?language=javascript
function solution(absolutes, signs) {
  return absolutes.reduce((prev, curr, i) => signs[i] ? prev + curr : prev - curr, 0);
}