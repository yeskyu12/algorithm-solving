// lv1 모의고사
// https://programmers.co.kr/learn/courses/30/lessons/42840
function solution(answers) {
  const supojaAnswers = [
      [1, 2, 3, 4, 5],
      [2, 1, 2, 3, 2, 4, 2, 5],
      [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];
  const scores = [0, 0, 0];
  
  answers.forEach((answer, i) => {
      supojaAnswers.forEach((supojaAnswer, j) => {
          if (answer === supojaAnswer[i % supojaAnswer.length]) scores[j] += 1;
      })
  })
  
  const maxScore = Math.max(...scores);
  const answer = [];
  scores.forEach((score, i) => {
      if (score === maxScore) answer.push(i + 1);
  })
  
  return answer;
}