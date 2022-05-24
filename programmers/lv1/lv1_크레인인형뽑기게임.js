// lv1 크레인 인형뽑기 게임
// https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
function solution(board, moves) {
  let count = 0;
  const length = board.length;
  const topIdx = new Array(length).fill(length);
  const bucket = [];
  
  for (let j = 0; j < length; j++) {
      for (let i = 0; i < length; i++) {
          if (board[i][j] !== 0) {
              topIdx[j] = i;
              break;
          }
      }
  }
  
  moves.forEach((move) => {
      const j = move - 1;
      const i = topIdx[j];
      
      if (i < length) {
          const doll = board[i][j];

          if (bucket[bucket.length - 1] === doll) {
              bucket.pop();
              count += 2;
          } else {
              bucket.push(doll);
          }
          
          board[i][j] = 0;
          topIdx[j]++;
      }
  })
  
  return count;
}