// lv1 행렬의 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/12950
function solution(arr1, arr2) {
    return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}