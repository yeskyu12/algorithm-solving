// lv2 튜플
// https://programmers.co.kr/learn/courses/30/lessons/64065?language=javascript
function solution(s) {
  return s.slice(2, -2)
  .split("},{")
  .map((str) => str.split(","))
  .sort((a, b) => a.length - b.length)    
  .reduce((tuple, currentSet) =>
    [...tuple, ...currentSet.filter((n) => !tuple.includes(n))], [])
  .map((n) => parseInt(n));
}