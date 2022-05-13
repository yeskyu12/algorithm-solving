// lv2 모음사전
// https://programmers.co.kr/learn/courses/30/lessons/84512
function solution(word) {
  const char = ['', 'A', 'E', 'I', 'O', 'U'];
  const words = [];
  
  const makeWord = (word, index) => {
      if (index === 5) {
          if (!words.includes(word)) words.push(word);
          return;
      }
      for (let i = 0; i < 6; i++) {
          makeWord(word + char[i], index + 1);
      }
  }
  
  makeWord('', 0)
  words.sort();
  
  return words.findIndex((w) => w === word);
}