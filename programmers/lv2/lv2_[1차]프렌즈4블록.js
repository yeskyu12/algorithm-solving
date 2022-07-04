// lv2 [1차] 프렌즈4블록
// https://programmers.co.kr/learn/courses/30/lessons/17679
// TODO: 블록 옮기는 과정 남음
function solution(m, n, board) {
  var answer = 0;
  const nextBoard = [...board.map((b) => b.split(""))];

  const EMPTY = "-";
  const direction = [
      { x: 0, y: 1 },
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: -1, y: 0 },
  ];
  
  const canRemove = (i, j) => (
      nextBoard[i][j] !== EMPTY &&
      i + 1 < m &&
      j + 1 < n &&
      nextBoard[i][j] === nextBoard[i + 1][j] &&
      nextBoard[i][j] === nextBoard[i][j + 1] &&
      nextBoard[i][j] === nextBoard[i + 1][j + 1]
  )
  
  const remove = (i, j, block) => {
      direction.forEach((d) => {
          const x = i + d.x;
          const y = j + d.y;
          if (x >= 0 && x < m && y >= 0 && y < n && nextBoard[x][y] === block) {
              nextBoard[x][y] = EMPTY;
              remove(x, y, block);
          }
      })
  }
  
  const removeBlocks = () => {
      for (let i = 0; i < m; i++) {
          for (let j = 0; j < n; j++) {
              if (canRemove(i, j)) {
                  const block = nextBoard[i][j];
                  nextBoard[i][j] = EMPTY;
                  remove(i, j, block);
              }
          }
      }
  }
  
  while (nextBoard.length > 0) {
      removeBlocks();
  }
  
  console.log(nextBoard)
  
  return answer;
}