// lv1 하샤드 수
// https://programmers.co.kr/learn/courses/30/lessons/12947
function solution(x) {
  const xString = x.toString();
  const number = 0;

  for (let i = 0; i < xString.length; i++) {
    number += parseInt(xString.charAt(i));
  }
  
  return number % x === 0;
}