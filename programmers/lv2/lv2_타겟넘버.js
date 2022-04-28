// lv2 타겟 넘버
// https://programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;
  const minusNumbers = numbers.map((n) => -n);
  
  function dfs(n, sum) {
      if (n < length) {
          dfs(n + 1, sum + numbers[n]);
          dfs(n + 1, sum + minusNumbers[n]);
      } else {
          if (sum === target) answer++;
      }
  }
  
  dfs(0, 0);
  
  return answer;
}