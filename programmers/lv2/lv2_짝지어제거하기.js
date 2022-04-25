// lv2 짝지어 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12973?language=javascript
function solution(s) {
  const stack = [s.charAt(0)];
  
  for (let i = 1; i < s.length; i++) {
      const c = s.charAt(i);
      c === stack[stack.length -1] ? stack.pop() : stack.push(c);
  }
  
  return stack.length ? 0 : 1;
}