// lv2 땅따먹기
// https://programmers.co.kr/learn/courses/30/lessons/12913
function solution(land) {
  let scores = [0, 0, 0, 0];
  
  const findMax = (index) => {
      let max = 0;
      scores.forEach((score, i) => {
          if (i !== index) max = Math.max(score, max);
      })
      return max;
  }
  
  const sum = (row) => {
      const nextScores = [];
      row.forEach((s, i) => {
          const max = findMax(i);
          nextScores[i] = s + max;
      })
      scores = nextScores;
  }
  
  land.forEach((row) => {
      sum(row);
  })
  
  return Math.max(...scores);
}