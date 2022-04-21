// lv2 숫자의 표현
// https://programmers.co.kr/learn/courses/30/lessons/12924?language=javascript
function solution(n) {
  let answer = 0;
  
  function check(number) {
      let sum = 0;
      
      while(sum < n) {
          sum += number++;
      }
      if (sum === n) answer++;
  }
  
  for (let i = 1; i <= n; i++) {
      check(i);
  }
  
  return answer;
}