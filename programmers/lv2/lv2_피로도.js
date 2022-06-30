// lv2 피로도
// https://programmers.co.kr/learn/courses/30/lessons/87946
function solution(k, dungeons) {
  let answer = 0;
  const { length } = dungeons;
  
  const isTired = (fatigue, visited) => {
      for (let i = 0; i < length; i++) {
          if (!visited.includes(i) && fatigue >= dungeons[i][0]) return false;
      }
      return true;
  }
  
  const isVisitable = (fatigue, visited, index) => {
      if (visited.includes(index)) return false;        
      if (fatigue < dungeons[index][0]) return false;
      return true;
  }
  
  const dfs = (fatigue, visited) => {
      if (isTired(fatigue, visited)) {
          answer = Math.max(visited.length, answer);
          return;
      }
      for (let i = 0; i < length; i++) {
          if (isVisitable(fatigue, visited, i)) {
              dfs(fatigue - dungeons[i][1], [...visited, i]);
          }
      }
  }
  
  dfs(k, []);
  
  return answer;
}