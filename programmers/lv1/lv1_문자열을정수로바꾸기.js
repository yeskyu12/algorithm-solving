// lv1 문자열을 정수로 바꾸기
// https://programmers.co.kr/learn/courses/30/lessons/12925?language=javascript
function solution(s) {
  let answer = Number(s);
  if (s.charAt(0) == '+') answer = Number(s.substring(1, s.length));
  if (s.charAt(0) == '-') answer = -Number(s.substring(1, s.length));
  return answer;
}