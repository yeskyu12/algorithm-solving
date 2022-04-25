// lv1 비밀지도
// https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
function solution(n, arr1, arr2) {
  const answer = [];
  
  for (let i = 0; i < n; i++) {
      const num1 = arr1[i].toString(2).padStart(n, '0');
      const num2 = arr2[i].toString(2).padStart(n, '0');
      let num = '';
      
      for (let j = 0; j < n; j++) {
          num1[j] == '0' && num2[j] == '0' ? num += '0' : num += '1';
      }
      
      answer.push(num.replace(/0/gi, ' ').replace(/1/gi, '#'));
  }
  
  return answer;
}