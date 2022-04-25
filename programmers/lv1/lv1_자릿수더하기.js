// lv1 자릿수 더하기
// https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript
function solution(n) {
  let answer = 0;
  let number = n;
  
  while(number > 0) {
      const m = number % 10;
      answer += m;
      number = (number - m) / 10;
  }

  return answer;
}