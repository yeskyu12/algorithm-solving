// lv2 방문 길이
// https://programmers.co.kr/learn/courses/30/lessons/49994?language=javascript
function solution(dirs) {
  let count = 0;
  let curPos = { x: 0, y: 0 };
  const visited = Array.from(Array(21), () => Array(21).fill(0))
  
  const setVisited = (nextPos) => {
      const getPos = (p) => (p + 5) * 2;
      const cur = { x: getPos(curPos.x), y: getPos(curPos.y) };
      const next = { x: getPos(nextPos.x), y: getPos(nextPos.y) };
      const visit = { x: (cur.x + next.x) / 2, y : (cur.y + next.y) / 2 };
      
      visited[visit.x][visit.y] = 1;
  }
  
  const move = (dir) => {
      const pos = {
          U: { x: 0, y: 1 },
          D: { x: 0, y: -1 },
          R: { x: 1, y: 0 },
          L: { x: -1, y: 0 }
      };
      const nextPos = { x: curPos.x + pos[dir].x, y: curPos.y + pos[dir].y };
      
      if (Math.abs(nextPos.x) > 5 || Math.abs(nextPos.y) > 5) return;
      
      setVisited(nextPos);
      curPos = nextPos;
  }
  
  dirs.split("").forEach((dir) => {
      move(dir);
  })
  
  visited.forEach((visit) => {
      count += visit.filter((v) => v === 1).length
  })
  
  return count;
}