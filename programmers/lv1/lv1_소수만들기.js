// lv1 소수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript
function solution(nums) {
  let answer = 0;
  const { length } = nums;
  
  const isPrime = (number) => {
      for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
          if (number % i === 0) return false;
      }
      return true;
  }
  
  const pick = (number, index, count) => {
      if (count === 3) {
          if (isPrime(number)) answer++;
          return;
      }
      for (let i = index; i < length; i++) {
          pick(number + nums[i], i + 1, count + 1);
      }
  }
  
  pick(0, 0, 0);
  
  return answer;
}