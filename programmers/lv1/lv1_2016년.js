// lv1 2016년
// https://programmers.co.kr/learn/courses/30/lessons/12901
function solution(a, b) {
  const days = ["SUN","MON","TUE","WED", "THU","FRI","SAT"];
  const date = new Date(`2016-${a}-${b}`);
  
  return days[date.getDay()];
}