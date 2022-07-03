// lv2 수식 최대화
// https://programmers.co.kr/learn/courses/30/lessons/67257
function solution(expression) {
  let answer = 0;
  const numbers = expression.split(/\+|\-|\*/).map((numStr) => Number(numStr));
  const operators = expression.replace(/[0-9]/g, "").split("");
  const exp = numbers.reduce((acc, cur, i) => {
      acc = [...acc, cur];
      if (i < operators.length) acc = [...acc, operators[i]];
      return acc;
  }, []);
  const operatorSet = [...new Set(operators)];
  const operatorPriority = [];
  
  const operate = (ex, index) => {
      const operator = ex[index];
      const num1 = ex[index - 1];
      const num2 = ex[index + 1];
      let result = 0;
      
      if (operator === "+") {
          result = num1 + num2;
      }
      if (operator === "-") {
          result = num1 - num2;
      }
      if (operator === "*") {
          result = num1 * num2;
      }
      
      ex.splice(index - 1, 3, result);
  }
  
  const makeOperatorPriority = (priority, count, length) => {
      if (count === length) {
          operatorPriority.push(priority);
          return;
      }
      
      for (let i = 0; i < length; i++) {
          if (!priority.includes(operatorSet[i])) {
              makeOperatorPriority([...priority, operatorSet[i]], count + 1, length);
          }
      }
  }
  
  makeOperatorPriority([], 0, operatorSet.length);
  
  operatorPriority.forEach((priority) => {
      const ex = [...exp];
      priority.forEach((op) => {
          for (let i = 0; i < ex.length; i++) {
              const e = ex[i];
              if (e === op) {
                  operate(ex, i);
                  i -= 2;
              }
          }
      })
      
      answer = Math.max(answer, Math.abs(ex[0]));
  })
  
  return answer;
}