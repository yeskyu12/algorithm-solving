// lv1 콜라츠 추측
// https://programmers.co.kr/learn/courses/30/lessons/12943
function solution(num) {
  let count = -1;
  
  while(count++ < 500) {
      if (num === 1) return count;
      if (num % 2 === 0) {
          num = num / 2;
          continue;
      }
      num = num * 3 + 1;
  }
  
  return -1;
}