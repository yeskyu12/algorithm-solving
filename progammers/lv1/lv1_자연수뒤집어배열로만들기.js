// lv1 자연수 뒤집어 배열로 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12932?language=javascript
function solution(n) {
  return n.toString().split("").reverse().map((m) => parseInt(m));
}