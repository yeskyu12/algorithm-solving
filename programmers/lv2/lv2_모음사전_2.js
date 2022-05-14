// lv2 모음사전
// https://programmers.co.kr/learn/courses/30/lessons/84512
function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    return word
            .split("")
            .reduce((p, c, i) => p + vowels.indexOf(c) * Math.floor(781 / 5 ** i) + 1, 0);
}