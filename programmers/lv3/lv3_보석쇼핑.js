// lv3 보석 쇼핑
// https://school.programmers.co.kr/learn/courses/30/lessons/67258
const eqSet = (set1, set2) => {
  if (set1.size !== set2.size) return false;
  for (const v of set1) {
      if (!set2.has(v)) return false;
  }
  return true;
}

const solution = (gems) => {
  const { length } = gems;
  const gemSet = new Set([...gems]);
  let front = 0, rear = 1;
  let answer = [1, length];
  
  while (true) {
      const set = new Set([...gems].slice(front, rear));
      if (eqSet(gemSet, set)) {
          const start = front + 1;
          if (set.size === length) return [start, rear];
          if (rear - start < answer[1] - answer[0]) answer = [start, rear];
          front++;
      } else {
          if (rear === length) break;
          if (rear < length) rear++;
      }
  }
  
  return answer;
}