// lv1 제일 작은 수 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12935
function solution(arr) {
  const index = arr.indexOf(Math.min(...arr))
  arr.splice(index, 1);
  return arr.length ? arr : [-1];
}