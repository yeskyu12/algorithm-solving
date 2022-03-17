// lv1 같은 숫자는 싫어
// https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
function solution(arr) {
  return arr.filter((num, i) => num !== arr[i+1]);
}