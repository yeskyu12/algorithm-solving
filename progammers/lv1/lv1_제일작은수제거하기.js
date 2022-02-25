function solution(arr) {
  const index = arr.indexOf(Math.min(...arr))
  arr.splice(index, 1);
  return arr.length ? arr : [-1];
}