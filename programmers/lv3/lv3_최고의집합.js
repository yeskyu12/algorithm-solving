// lv3 최고의 집함
// https://programmers.co.kr/learn/courses/30/lessons/12938?language=javascript
function solution(n, s) {
  if (s < n) return [-1];
  
  const num = Math.floor(s / n);
  const answer = new Array(n).fill(num);

  let mod = s % n;
  let i = n - 1;
  
  while (mod-- > 0) {
      answer[i] = answer[i--] + 1;
  }
  
  return answer;
}