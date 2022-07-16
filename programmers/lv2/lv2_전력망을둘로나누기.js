// lv2 전력망을 둘로 나누기
// https://school.programmers.co.kr/learn/courses/30/lessons/86971
function solution(n, wires) {
  let answer = 100;
  const { length } = wires;
  const map = new Map();
  
  for (let i = 1; i <= n; i++) {
      map.set(i, []);
  }
  
  const divide = (wireMap, start) => {
      const group = [start];
      let queue = [...wireMap.get(start)];
      
      while (queue.length > 0) {
          const wire = queue.shift();
          if (!group.includes(wire)) {
              group.push(wire);
              queue = [...queue, ...wireMap.get(wire)];
          }
      }
      
      const difference = Math.abs(group.length - (n - group.length));
      answer = Math.min(difference, answer);
  }
  
  for (let i = 0; i < length; i++) {
      const wireMap = new Map(map);
      const wiresCopy = [...wires];
      
      wiresCopy.splice(i, 1);
      wiresCopy.forEach((wire) => {
          wireMap.set(wire[0], [...wireMap.get(wire[0]), wire[1]]);
          wireMap.set(wire[1], [...wireMap.get(wire[1]), wire[0]]);
      })
      
      const start = wireMap.get(1).length > 0 ? 1 : 2;
      divide(wireMap, start);
  }
  
  return answer;
}