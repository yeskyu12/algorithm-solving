// lv1 완주하지 못한 선수 2
// https://programmers.co.kr/learn/courses/30/lessons/42576
function solution(participant, completion) {
  var map = new Map();
  
  for (let i = 0; i < participant.length; i++) {
      const p = participant[i];
      const c = completion[i];
      
      map.set(p, (map.get(p) || 0) + 1);
      map.set(c, (map.get(c) || 0) - 1);
  }

  let answer = '';
  
  for(let [k, v] of map) {
      if(v > 0) answer = k;
  }

  return answer;
}