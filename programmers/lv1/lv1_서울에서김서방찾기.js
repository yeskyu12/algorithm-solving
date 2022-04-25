// lv1 서울에서 김서방 찾기
// https://programmers.co.kr/learn/courses/30/lessons/12919
function solution(s) {
  return `김서방은 ${s.findIndex((name) => name == "Kim")}에 있다`;
}