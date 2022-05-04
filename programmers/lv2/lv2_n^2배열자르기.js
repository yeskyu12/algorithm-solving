// lv2 n^2 배열 자르기
// https://programmers.co.kr/learn/courses/30/lessons/87390?language=javascript
function solution(n, left, right) {
  const answer = [];
  
  const getNumber = (index) => {
      const min = Math.floor(index / n) + 1;
      const num = index % n + 1;
      
      return Math.max(min, num);
  }
  
  for (let i = left; i <= right; i++) {
      answer.push(getNumber(i));
  }
  
  return answer;
}