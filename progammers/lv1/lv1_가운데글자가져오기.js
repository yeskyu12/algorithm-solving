// lv1 가운데 글자 가져오기
// https://programmers.co.kr/learn/courses/30/lessons/12903
function solution(s) {
  const length = s.length;
  const half = length / 2;
  return length % 2 === 0 ? s.slice(half - 1, half + 1) : s.charAt(half);
}