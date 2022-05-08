// lv2 올바른 괄호
// https://programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
function solution(s) {
  if (s.length % 2 === 1) return false;
  let count = 0;
  
  for (let c of s) {
      c === "(" ? count++ : count--;
      if (count < 0) return false;
  }
  
  return count === 0;
}