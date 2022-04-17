// lv2 JadenCase 문자열 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12951?language=javascript
function solution(s) {
  return s
      .toLowerCase()
      .split(" ")
      .map((str) => str.charAt(0).toUpperCase() + str.substr(1))
      .join(" ");
}