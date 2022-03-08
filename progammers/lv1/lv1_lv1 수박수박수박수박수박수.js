// lv1 수박수박수박수박수박수?
// https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript
function solution(n) {
  var answer = '';
  for (let i = 0; i < n; i++) {
      answer += i % 2 == 0 ? '수' : '박';
  }
  return answer;
}