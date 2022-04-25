// lv1 나머지가 1이 되는 수 찾기
// https://programmers.co.kr/learn/courses/30/lessons/87389?language=javascript
function solution(n) {
  for (let x = 2; x < n; x++) {
      if (n % x == 1) return x;
  }
}