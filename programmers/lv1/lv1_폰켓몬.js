// lv1 폰켓몬
// https://programmers.co.kr/learn/courses/30/lessons/1845?language=javascript
function solution(nums) {
  const set = new Set(nums);
  return Math.min(set.size, Math.floor(nums.length / 2));
}