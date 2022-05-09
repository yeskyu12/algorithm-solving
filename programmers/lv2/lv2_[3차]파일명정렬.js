// lv2 [3차] 파일명 정렬
// https://programmers.co.kr/learn/courses/30/lessons/17686?language=javascript
function solution(files) {
  const isNotNum = (c) => isNaN(parseInt(c));
  
  const classify = (file) => {
      let head = '', number = '';
      
      for (let i in file) {
          const c = file[i];
          
          if (isNotNum(c)) {
              if (number) break;
              head += c;
          }
          else number += c;
      }
      
      return [head.toLowerCase(), parseInt(number)];
  }
  
  const compare = (fileA, fileB) => {
      const [headA, numberA] = classify(fileA);
      const [headB, numberB] = classify(fileB);
      
      if (headA > headB) return 1;
      if (headA < headB) return -1;
      if (numberA > numberB) return 1;
      if (numberA < numberB) return -1;
      return 0;
  }
  
  return files.sort((fileA, fileB) => compare(fileA, fileB));
}