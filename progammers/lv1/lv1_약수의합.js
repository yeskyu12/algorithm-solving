// lv1 약수의 합
// https://programmers.co.kr/learn/courses/30/lessons/12928?language=javascript
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= Math.pow(n, 0.5); i++) {
      if (n % i === 0) answer += i !== n / i ? (i + n / i) : i;
  }
  return answer;
}