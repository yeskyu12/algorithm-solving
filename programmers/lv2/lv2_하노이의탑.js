// lv2 하노이의 탑
// https://programmers.co.kr/learn/courses/30/lessons/12946?language=javascript
function solution(n) {
  const answer = [];
  
  const move = (m, src, mid, dist) => {
      if (m === 1) {
          answer.push([src, dist]);
          return;
      }
      move(m - 1, src, dist, mid);
      answer.push([src, dist]);
      move(m-1, mid, src, dist);
  }
  
  move(n, 1, 2, 3);
  
  return answer;
}
