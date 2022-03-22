// lv1 K번째수
// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
function solution(array, commands) {
  const answer = [];
  
  commands.forEach((command) => {
      const [sliceStart, sliceEnd, n] = command;
      
      answer.push(array.slice(sliceStart - 1, sliceEnd).sort((n1, n2) => n1 - n2)[n - 1]);
  })
  
  return answer;
}