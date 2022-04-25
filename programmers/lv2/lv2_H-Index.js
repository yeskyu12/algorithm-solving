// lv2 H-Index
// https://programmers.co.kr/learn/courses/30/lessons/42747?language=javascript#
function solution(citations) {
    citations = citations.sort((a, b) => b - a);
    let hIndex = 0;
    
    while(hIndex + 1 <= citations[hIndex]){ hIndex++; }
    
    return hIndex;
}