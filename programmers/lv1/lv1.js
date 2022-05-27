// lv1 실패율
// https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript
function solution(N, stages) {
  const countMap = new Map();
  
  stages.sort((a, b) => b - a).forEach((stage) => {
      const count = countMap.get(stage);
      countMap.set(stage, count ? count + 1 : 1);
  })

  const failureMap = new Map();
  let people = stages.length;
  
  for (let stage = 1; stage <= N; stage++) {
      const count = countMap.get(stage) ? countMap.get(stage) : 0;
      failureMap.set(stage, count / people);
      people -= count;
  }
  
  return [...failureMap]
      .sort((a, b) => b[1] - a[1])
      .map((f) => f[0]);
}