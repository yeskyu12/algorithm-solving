// lv2 프린터
// https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
function solution(priorities, location) {
  let printed = false;
  let count = 0;
  
  function setLocation() {
      location--;
      if (location < 0) location += priorities.length;
  }
  
  while(!printed) {
      if (priorities.findIndex((p) => p > priorities[0]) > -1) {
          priorities.push(priorities.shift());
          setLocation();
          continue;
      }
      
      if (location === 0) printed = true;
      
      priorities.shift();
      count++;
      setLocation();
  }
      
  return count;
}