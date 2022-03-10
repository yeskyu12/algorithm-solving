// lv1 소수 찾기
// https://programmers.co.kr/learn/courses/30/lessons/12921?language=javascript
function solution(n) {
  var answer = 0;
  
  loop:
  for (let i = 2; i <= n; i++) {
      for (let j = 2; j * j <= i; j++) {
          if (i % j == 0) continue loop;
      }
      answer++;
  }
  return answer;
}