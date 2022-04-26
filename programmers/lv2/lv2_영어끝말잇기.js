// lv2 영어 끝말잇기
// https://programmers.co.kr/learn/courses/30/lessons/12981
function solution(n, words) {
  const used = [],
        count = new Array(n).fill(0);
  let answer = [0, 0],
      prevWord = words[0].charAt(0),
      failed = false,
      person = 0,
      i = 0;

  while(!failed && i < words.length) {
      const word = words[i++];
      
      if (used.includes(word) || prevWord.charAt(prevWord.length - 1) !== word.charAt(0)) {
          failed = true;
          answer = [person + 1, count[person] + 1];
      }
      
      used.push(word);
      count[person]++;
      prevWord = word;
      person = (person + 1) % n;
  }

  return answer;
}