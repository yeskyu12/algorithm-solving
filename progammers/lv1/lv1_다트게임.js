// lv1 다트 게임
// https://programmers.co.kr/learn/courses/30/lessons/17682?language=javascript
const solution = (dartResult) => {
  let scoreTemp = '';
  let scores = [];
  
  const processScore = (char) => {
      if (isNaN(Number(char))) {
          if (scoreTemp) {
              scores.push(Number(scoreTemp));
              scoreTemp = '';
          }
      } else {
          scoreTemp += char;
      }
  }
  
  const getSquare = (char) => {
      if (char === 'S') return 1;
      if (char === 'D') return 2;
      if (char === 'T') return 3;
      return 0;
  }
  
  const processSquare = (char) => {
      const square = getSquare(char);
      if (square) scores[scores.length - 1] = Math.pow(scores[scores.length - 1], square);
  }
  
  const processAward = (char) => {
      if (char === '*') {
          scores[scores.length - 1] *= 2;
          scores[scores.length - 2] *= 2;
      }
      if (char === '#') {
          scores[scores.length - 1] *= -1;
      }
  }
  
  const processDartResult = (char) => {
      processScore(char);
      processSquare(char);
      processAward(char);
  }
  
  for (let i = 0; i < dartResult.length; i++) {
      const char = dartResult[i];
      processDartResult(char);
  }
  
  return scores.reduce((a, b) => a + b);
}