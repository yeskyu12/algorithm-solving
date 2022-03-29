// lv1 예산
// https://programmers.co.kr/learn/courses/30/lessons/12982?language=javascript
function solution(d, budget) {
  const sorted = d.sort((a, b) => a - b);
  const length = sorted.length;
  
  let sum = 0;
  let count = 0;
  
  for (; count < length; count++) {
      sum += sorted[count];
      if (sum > budget) break;
  }
  
  return count;
}