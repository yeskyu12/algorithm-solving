// lv2 카펫
// https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript
function solution(brown, yellow) {
  let answer = [];
  
  for (let i = 1; i <= Math.sqrt(yellow); i++) {
      if (yellow % i !== 0) continue;
      
      const x = i + 2;
      const y = yellow / i + 2;
      const brownSquare = x * y - yellow;
      
      if (brown === brownSquare) {
          answer = [Math.max(x, y), Math.min(x, y)];
          break;
      }
  }
  
  return answer;
}