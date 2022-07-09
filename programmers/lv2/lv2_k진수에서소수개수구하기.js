// lv2 k진수에서 소수 개수 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/92335
function solution(n, k) {
  let answer = 0;
  
  const isPrime = (number) => {
      const num = Number(number);
      
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
      }
      
      return true;
  }
  
  n.toString(k).split("0").forEach((num) => {
      if (isPrime(num)) answer++;
  })
  
  return answer;
}