// lv1 없는 숫자 더하기
// https://programmers.co.kr/learn/courses/30/lessons/86051?language=javascript
function solution(numbers) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) sum += i;
    }
    return sum;
}
