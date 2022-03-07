// lv1 시저 암호
// https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript
function solution(s, n) {
  function push(asciiCode) {
      if (asciiCode == 32) return asciiCode;
      
      let pushedCode = asciiCode + n;
      if ((asciiCode < 91 && pushedCode > 90) || (asciiCode < 123 && pushedCode > 122)) {
          pushedCode -= 26;
      }
      return pushedCode;
  }
  
  let answer = '';
  for (let i = 0; i < s.length; i++) {
      const pushedCode = push(s.charCodeAt(i));
      answer += String.fromCharCode(pushedCode);
  }
      
  return answer;
}