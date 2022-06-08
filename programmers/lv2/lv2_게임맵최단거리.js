// lv2 게임 맵 최단거리
// https://programmers.co.kr/learn/courses/30/lessons/1844?language=javascript
function solution(maps) {
  const direction = [
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 }
  ];
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from(Array(n), () => Array(m).fill(false));
  const steps = [];
  
  visited[0][0] = true;
  steps.push({ x: 0, y: 0, len: 1 });
  
  const isNotInArea = (x, y) => {
      return x < 0 || x >= n || y < 0 || y >= m;
  }
  
  const isVisited = (x, y) => {
      return visited[x][y];
  }
  
  const isBlocked = (x, y) => {
      return maps[x][y] === 0;
  }
  
  const isDestination = (x, y) => {
      return x === n - 1 && y === m - 1;
  }
  
  while (steps.length) {
      const { x: curX, y: curY, len } = steps.shift();
      
      for (let i = 0; i < 4; i++) {
          const { x, y } = direction[i];
          const nextX = curX + x;
          const nextY = curY + y;
          const nextLen = len + 1;
          
          if (isNotInArea(nextX, nextY) || isVisited(nextX, nextY) || isBlocked(nextX, nextY)) continue;
          if (isDestination(nextX, nextY)) {
              return nextLen;
          }
          
          steps.push({ x: nextX, y: nextY, len: nextLen });
          visited[nextX][nextY] = true;
      }
  }
  
  return -1;
}