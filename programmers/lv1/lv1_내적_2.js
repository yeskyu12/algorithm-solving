// lv1 내적 2
// https://programmers.co.kr/learn/courses/30/lessons/70128
function solution(a, b) {
    return a.reduce((sum, num, i) => sum + num * b[i], 0);
}
