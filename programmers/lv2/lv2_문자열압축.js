// lv2 문자열 압축
// https://programmers.co.kr/learn/courses/30/lessons/60057
function solution(s) {
  let minLength = 9999;

  const length = s.length;
  
  const compress = (n) => {
      let str = '';
      let prevStr = '';
      let index = 0;
      let count = 1;
      
      const addStr = () => {
          const nextStr = count > 1 ? `${count}${prevStr}` : prevStr;
          str += nextStr;
      }
      
      while (index < length) {
          const substr = s.substr(index, n);
          
          if (prevStr === substr) {
              count++;
          } else {
              addStr();
              prevStr = substr;
              count = 1;
          }
          
          index += n;
      }
      addStr();
      
      minLength = Math.min(minLength, str.length);
  }
  
  for (let i = 1; i <= length; i++) {
      compress(i);
  }
  
  return minLength;
}