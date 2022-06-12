// lv2 삼각 달팽이
// https://programmers.co.kr/learn/courses/30/lessons/68645?language=javascript
function solution(n) {
  const max = n * (n + 1) / 2;
  const triangleSnail = new Array(n);
  const move = [
      { r: 1, c: 0 },
      { r: 0, c: 1 },
      { r: -1, c: -1},
  ]
  
  let r = 0, c = 0, m = 0;
  
  const checkSnail = () => {
      const nextR = r + move[m].r;
      const nextC = c + move[m].c;
      if (
          nextR < 0 ||
          nextR === n ||
          nextC < 0 ||
          nextC > nextR ||
          triangleSnail[nextR][nextC] !== 0
      ) {
          m = (m + 1) % 3;
      }
      r = r + move[m].r;
      c = c + move[m].c;
  }
  
  for (let i = 0; i < n; i++) {
      triangleSnail[i] = new Array(i + 1).fill(0);
  }
  
  for (let i = 1; i <= max; i++) {
      triangleSnail[r][c] = i;
      checkSnail();
  }
  
  return triangleSnail.flat();
}