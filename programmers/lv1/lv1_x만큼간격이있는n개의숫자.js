// lv1 x만큼 간격이 있는 n개의 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12954
function solution(x, n) {
  var answer = [];
  
  for (let i = 1; i <= n; i++) {
      answer.push(i * x);
  }
  
  return answer;
}