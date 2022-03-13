// lv1 문자열 내 p와 y의 개수
// https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript
function solution(s) {
  const lower = s.toLowerCase();
  let pCount = 0;
  let yCount = 0;
  
  for (let i = 0; i < lower.length; i++) {
      if (lower.charAt(i) == 'p') pCount++;
      if (lower.charAt(i) == 'y') yCount++;
  }

  return pCount == yCount;
}