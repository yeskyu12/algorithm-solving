// lv2 이진 변환 반복하기
// https://programmers.co.kr/learn/courses/30/lessons/70129?language=javascript
function solution(s) {
  let answer = [0, 0];
  let number = s;
  const removeZero = (str) => str.replace(/0/g, "");
  
  while (number !== '1') {
      const removedZeroNum = removeZero(number);
      const removedZero = number.length - removedZeroNum.length;
      answer = [answer[0] + 1, answer[1] + removedZero];
      number = removedZeroNum.length.toString(2);
  }
  
  return answer;
}