// lv2 점프와 순간 이동
// https://programmers.co.kr/learn/courses/30/lessons/12980
function solution(n) {
  let battery = 0;
  let distance = n;
  
  while (distance > 0) {
      if (distance % 2 === 0) {
          distance /= 2;
      } else {
          distance -= 1;
          battery++;
      }
  }

  return battery;
}