// lv2 행렬의 곱셈
// https://programmers.co.kr/learn/courses/30/lessons/12949?language=javascript
function solution(arr1, arr2) {
  const r = arr1.length;
  const c = arr2[0].length;
  const n = arr2.length;
  const answer = new Array(r);
  
  const getSum = (i, j) => {
      let sum = 0;
      
      for (let k = 0; k < n; k++) {
          sum += arr1[i][k] * arr2[k][j];
      }
      
      return sum;
  }
  
  for (let i = 0; i < r; i++) {
      answer[i] = [];
      for (let j = 0; j < c; j++) {
          answer[i].push(getSum(i, j));
      }
  }
  
  return answer;
}