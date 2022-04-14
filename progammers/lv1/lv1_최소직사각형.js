// lv1 최소직사각형
// https://programmers.co.kr/learn/courses/30/lessons/86491/solution_groups?language=javascript
function solution(sizes) {
  let maxHeight = 0;
  let maxWidth = 0;
  
  sizes.forEach((size) => {
      maxHeight = Math.max(maxHeight, size[0], size[1]);
      maxWidth = Math.max(maxWidth, Math.min(size[0], size[1]));
  })
  
  return maxHeight * maxWidth;
}