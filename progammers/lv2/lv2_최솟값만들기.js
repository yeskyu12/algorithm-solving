// lv2 최솟값만들기
// https://programmers.co.kr/learn/courses/30/lessons/12941?language=javascript
function solution(A,B){
    const sortedA = A.sort((a, b) => a - b);
    const sortedB = B.sort((a, b) => b - a);

    return sortedA.reduce((sum, numA, i) => sum + numA * sortedB[i], 0);
}
