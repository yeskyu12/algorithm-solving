// lv2 최댓값과 최솟값
// https://programmers.co.kr/learn/courses/30/lessons/12939?language=javascript
function solution(s) {
    s = s.split(" ").sort((a, b) => a - b);
    return `${s[0]} ${s[s.length - 1]}`;
}