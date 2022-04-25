// lv1 부족한 금액 계산하기
// https://programmers.co.kr/learn/courses/30/lessons/82612?language=javascript
function solution(price, money, count) {
  const lack = price * (count + 1) / 2 * count - money;
  return lack > 0 ? lack : 0;
}