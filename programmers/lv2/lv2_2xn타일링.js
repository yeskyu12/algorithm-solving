// lv2 2 x n 타일링
// https://programmers.co.kr/learn/courses/30/lessons/12900?language=javascript
function solution(n) {
  const ways = [0, 1, 2];
  
  for (let i = 3; i <= n; i++) {
      ways[i] = (ways[i - 1] + ways[i - 2]) % 1000000007;
  }
  
  return ways[n];
}