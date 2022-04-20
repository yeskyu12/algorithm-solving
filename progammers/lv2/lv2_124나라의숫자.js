// lv2 124 나라의 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12899
function solution(n) {
  const numbers = ['4', '1', '2'];
  var answer = '';
  while (n > 0) {
      answer = numbers[n % 3] + answer;
      n = parseInt((n - 1) / 3);
  }
  return answer;
}