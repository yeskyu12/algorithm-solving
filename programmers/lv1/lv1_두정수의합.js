// lv1 두 정수 사이의 합
// https://programmers.co.kr/learn/courses/30/lessons/12912?language=javascript
function solution(a, b) {
  const bigNumber = Math.max(a, b);
  const smallNumber = Math.min(a, b);
  
  let sum = 0;
  for (let number = smallNumber; number <= bigNumber; number++) {
      sum += number;
  }
  
  return sum;
}