// lv2 가장 큰 수
// https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript
function solution(numbers) {
  const answer = numbers.map((number) => String(number))
                      .sort((a, b) => b + a - (a + b))
                      .join('');
  
  return answer.startsWith('0') ? '0' : answer;
}