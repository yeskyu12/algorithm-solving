// lv1 최대공약수와 최소공배수
// https://programmers.co.kr/learn/courses/30/lessons/12940?language=javascript
function solution(n, m) {
  const getGreatest = (a, b) => {  
      return b === 0 ? a : getGreatest(b, a % b);
  }
  const greatest = getGreatest(n, m);
  const least = (n * m) / greatest;
  
  return [greatest, least];
}