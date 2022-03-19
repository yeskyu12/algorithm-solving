// lv1 2016년 2
// https://programmers.co.kr/learn/courses/30/lessons/12901
function solution(a, b) {
  const date = new Date(`2016-${a}-${b}`);
  
  return date.toString().slice(0, 3).toUpperCase();
}