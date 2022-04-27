// lv2 N개의 최소공배수
// https://programmers.co.kr/learn/courses/30/lessons/12953?language=javascript
function solution(arr) {
  const getGcd = (a, b) => a % b === 0 ? b : getGcd(b, a % b);
  const getLcm = (a, b) => a * b / getGcd(a, b);
  
  return arr.reduce((acc, cur) => getLcm(acc, cur), 1);
}