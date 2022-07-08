// lv2 2개 이하로 다른 비트
// https://school.programmers.co.kr/learn/courses/30/lessons/77885
function solution(numbers) {
  const answer = [];
  
  numbers.forEach((num) => {
      const binary = num.toString(2);
      if (binary.endsWith("0")) {
          answer.push(num + 1);
      } else {
          const reverse = binary.split("").reverse();
          let numStr = `10${binary.substring(1)}`;
          
          for (let i = 0; i < reverse.length; i++) {
              if (reverse[i] === "0") {
                  reverse[i] = "1";
                  reverse[i - 1] = "0";
                  numStr = reverse.reverse().join("");
                  break;
              }
          }
          
          answer.push(parseInt(numStr, 2));
      }
  })
  
  return answer;
}