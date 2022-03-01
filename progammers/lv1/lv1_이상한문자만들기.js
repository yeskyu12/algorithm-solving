// lv1 이상한 문자 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript
function solution(s) {
  return s
      .split(' ')
      .map((word) =>
           word
           .split('')
           .map((char, i) =>
                i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
               ).join('')
          ).join(' ');
}