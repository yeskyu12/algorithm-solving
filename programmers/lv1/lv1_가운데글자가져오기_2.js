// lv1 가운데 글자 가져오기 2
// https://programmers.co.kr/learn/courses/30/lessons/12903
function solution(s) {
  const length = s.length;
  const half = Math.ceil(length / 2);
  const isEven = length % 2 === 0;
  
  return s.substr(half - 1, isEven ? 2 : 1);
}