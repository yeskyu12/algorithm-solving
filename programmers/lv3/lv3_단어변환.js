// lv3 단어 변환
// https://programmers.co.kr/learn/courses/30/lessons/43163?language=javascript
function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  
  let answer = 0;
  
  const used = new Array(words.length).fill(false);
  const queue = [{ word: begin, stage: 0 }];
  
  const canConvert = (word, w, index) => {
      if (used[index]) return false;
      
      let count = 0;
      for (let i = 0; i < word.length; i++) {
          if (word[i] !== w[i]) count++;
      }
      
      return count === 1;
  }
  
  const convert = (word, stage) => {
      words.forEach((w, i) => {
          if (canConvert(word, w, i)) {
              queue.push({ word: w, stage: stage + 1 });
              used[i] = true;
          }
      })
  }
  
  while (queue.length > 0) {
      const { word, stage } = queue.shift();
      
      if (word === target) {
          answer = stage;
          break;
      }
      
      convert(word, stage);
  }
  
  return answer;
}