// lv1 콜라츠 추측
// https://programmers.co.kr/learn/courses/30/lessons/12943
function solution(num) {
  let count = 0;
  
  while(num > 1 && count++ < 500) {
      num % 2 === 0 ? num = num / 2 : num = num * 3 + 1;
  }
  
  return num === 1 ? count : -1;
}