// lv2 다음 큰 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12911?language=javascript
function solution(n) {
  const getOneCount = (n) => n.toString(2).split("").filter((c) => c === '1').length;
  const oneCount = getOneCount(n++);
  
  while(getOneCount(n) !== oneCount) { n++; }
  
  return n;
}