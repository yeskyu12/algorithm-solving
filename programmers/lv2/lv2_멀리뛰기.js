// lv2 멀리 뛰기
// https://programmers.co.kr/learn/courses/30/lessons/12914?language=javascript
function solution(n) {
  const jumps = [1, 2];
  
  for (let i = 2; i < n; i++) {
      jumps[i] = (jumps[i-2] + jumps[i-1]) % 1234567;
  }
  
  return jumps[n-1];
}