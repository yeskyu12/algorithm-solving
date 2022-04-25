// lv1 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript
function solution(lottos, win_nums) {
  const ranks = [6, 6, 5, 4, 3, 2, 1];
  let winCount = 0;
  let zeroCount = 0;
  
  lottos.forEach((lotto, i) => {
      if (win_nums.includes(lotto)) winCount++;
      else if (lotto === 0) zeroCount++;
  })
  
  const maxRank = ranks[winCount + zeroCount];
  const minRank = ranks[winCount];
  return [maxRank, minRank];
}